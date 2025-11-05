import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { editReminder, getReminderById } from "../redux/slice/reminderSlice";

function EditReminder() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    priority: "",
    completed: false,
    color: "", 
  });

 
  const pastelColors = [
    "bg-[#E8D1FF]",
    "bg-[#AEEEEE]",
    "bg-[#F9C5D5]",
    "bg-[#FFD6A5]",
    "bg-[#CFE2FF]",
    "bg-[#FFF5BA]",
  ];

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReminderById(id));
  }, [dispatch, id]);

  const { selectedReminder, loading } = useSelector((state) => state.reminders);

  useEffect(() => {
    if (selectedReminder) {
      setInput(selectedReminder);
    }
  }, [selectedReminder]);

  return (
    <div className="min-h-screen bg-[#FDFBF6] flex items-center justify-center my-16">
      <div
        className={`max-w-3xl w-full rounded-3xl p-10 border border-[#98EFAB] shadow-md ${
          input.color || "bg-[#E8D1FF]"
        }`}
      >
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Edit Reminder
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <form className="space-y-6">
          
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                value={input.title}
                onChange={(e) => setInput({ ...input, title: e.target.value })}
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6E37B]"
              />
            </div>

           
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description
              </label>
              <textarea
                rows="3"
                value={input.description}
                onChange={(e) =>
                  setInput({ ...input, description: e.target.value })
                }
                className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6E37B]"
              ></textarea>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Category
                </label>
                <select
                  value={input.category}
                  onChange={(e) =>
                    setInput({ ...input, category: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6E37B]"
                >
                  <option value="">Select Category</option>
                  <option>Work</option>
                  <option>Personal</option>
                  <option>Health</option>
                  <option>Study</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={input.date}
                  onChange={(e) => setInput({ ...input, date: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6E37B]"
                />
              </div>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Priority
                </label>
                <select
                  value={input.priority}
                  onChange={(e) =>
                    setInput({ ...input, priority: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6E37B]"
                >
                  <option value="">Select Priority</option>
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
                    checked={input.completed}
                    onChange={(e) =>
                      setInput({ ...input, completed: e.target.checked })
                    }
                    className="w-5 h-5 accent-[#F6E37B]"
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
                  value={input.color}
                  onChange={(e) =>
                    setInput({ ...input, color: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#F6E37B]"
                >
                  <option value="">Choose a color</option>
                  {pastelColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>

                {input.color && (
                  <div
                    className={`w-8 h-8 rounded-full border border-gray-400 ${input.color}`}
                  ></div>
                )}
              </div>
            </div>

          
            <div className="flex justify-center gap-6 mt-10">
              <Link to={`/`}>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-[#E8F8EF] text-[#3C7E4D] px-6 py-2 rounded-full font-medium hover:bg-[#98EFAB] transition"
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Back
                </button>
              </Link>

              <button
                type="button"
                onClick={() => {
                  dispatch(editReminder({ id, data: input }));
                  alert("Updated successfully")
                }}
                className="flex items-center gap-2 bg-[#BED2F8] text-[#365F93] px-6 py-2 rounded-full font-medium hover:bg-[#8FB8E8] transition"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default EditReminder;
