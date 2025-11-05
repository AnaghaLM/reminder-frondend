import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addReminder } from "../redux/slice/reminderSlice";

function AddReminder() {
  const pastelColors = [
  "bg-[#E8D1FF]", 
  "bg-[#AEEEEE]", 
  "bg-[#F9C5D5]", 
  "bg-[#FFD6A5]", 
  "bg-[#CFE2FF]",
  "bg-[#FFF5BA]", 
  ];

  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    priority: "",
    completed: false,
    color: "",
  });

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-[#FDFBF6] flex items-center justify-center my-16">
      <div className="max-w-3xl w-full mt-16 rounded-3xl p-10 border border-[#F1A7B5] shadow-md bg-[#F9C5D5]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Add New Reminder
        </h2>

        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              value={newReminder.title}
              onChange={(e) =>
                setNewReminder({ ...newReminder, title: e.target.value })
              }
              placeholder="Enter reminder title"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#98EFAB]"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              rows="3"
              value={newReminder.description}
              onChange={(e) =>
                setNewReminder({ ...newReminder, description: e.target.value })
              }
              placeholder="Enter description"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#98EFAB]"
            ></textarea>
          </div>

          {/* Category + Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Category
              </label>
              <select
                value={newReminder.category}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, category: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#98EFAB]"
              >
                <option value="">Select category</option>
                <option>Work</option>
                <option>Personal</option>
                <option>Health</option>
                <option>Study</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Date</label>
              <input
                type="date"
                value={newReminder.date}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, date: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#98EFAB]"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Priority
              </label>
              <select
                value={newReminder.priority}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, priority: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#98EFAB]"
              >
                <option value="">Select priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Completed
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={newReminder.completed}
                  onChange={(e) =>
                    setNewReminder({ ...newReminder, completed: e.target.checked })
                  }
                  className="w-5 h-5 accent-[#98EFAB]"
                />
                <span className="text-gray-700">Mark as done</span>
              </div>
            </div>
          </div>

        
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Card Color
            </label>
            <div className="flex items-center gap-3">
              <select
                value={newReminder.color}
                onChange={(e) =>
                  setNewReminder({ ...newReminder, color: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#98EFAB]"
              >
                <option value="">Choose a color</option>
                {pastelColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>

              {newReminder.color && (
                <div
                  className={`w-8 h-8 rounded-full border border-gray-400 ${newReminder.color}`}
                ></div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-10">
            <Link to="/">
              <button
                type="button"
                className="flex items-center gap-2 bg-[#E8F8EF] text-[#3C7E4D] px-6 py-2 rounded-full font-medium hover:bg-[#98EFAB] transition"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Cancel
              </button>
            </Link>

            <button
              type="button"
               onClick={() => {
    if (!newReminder.title.trim())
       {
      alert(" Please enter a title before adding!");
     return;
    }
    dispatch(addReminder(newReminder));
    alert("Added successfully!");
  }}
              className="flex items-center gap-2 bg-[#B9F5A9] text-[#3C7E4D] px-6 py-2 rounded-full font-medium hover:bg-[#8DE99C] transition"
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              Add Reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddReminder;
