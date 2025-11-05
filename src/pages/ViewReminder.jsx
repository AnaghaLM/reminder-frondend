import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { fetchAllReminders } from "../redux/slice/reminderSlice";

function ViewReminder() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { allReminders, loading } = useSelector((state) => state.reminders);

  useEffect(() => {
    if (allReminders.length === 0) {
      dispatch(fetchAllReminders());
    }
  }, [dispatch, allReminders]);

  const selectedReminder = allReminders.find(
    (item) => String(item.id) === id
  );

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-medium">
        Loading reminder...
      </div>
    );
  }

  if (!selectedReminder) {
    return (
      <div className="text-center mt-10 text-lg font-medium text-red-500">
        Reminder not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF6] flex items-center justify-center">
      <div
  className={`w-full max-w-3xl rounded-3xl p-10 border border-[#98EFAB] shadow-md ${selectedReminder.color || "bg-pink-200"}`}
>
  

        <h1 className="text-3xl font-semibold text-gray-800 mb-3 text-center">
          {selectedReminder.title}
        </h1>

        <div className="flex justify-center gap-4 mb-8 text-gray-700 text-sm">
          <p className="px-4 py-1 bg-[#F6D7DE] rounded-full">
            {selectedReminder.category || "No category"}
          </p>
          <p className="px-4 py-1 bg-[#F8F8B0] rounded-full">
            Due: {selectedReminder.date || "No date"}
          </p>
        </div>

        <div className="text-center text-gray-800 leading-relaxed mb-6 px-4">
          <p>{selectedReminder.description || "No description available."}</p>
        </div>

        <div className="text-center text-gray-700 mb-4">
          <p>
            <strong>Priority:</strong> {selectedReminder.priority || "Not set"}
          </p>
        </div>

        <div className="text-center text-gray-700 mb-10">
          <p>
            <strong>Status:</strong>{" "}
            {selectedReminder.completed ? "Completed" : " Pending"}
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <Link to="/">
            <button className="flex items-center gap-2 bg-[#E8F8EF] text-[#3C7E4D] px-6 py-2 rounded-full font-medium hover:bg-[#98EFAB] transition">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back
            </button>
          </Link>

          <Link to={`/edit/${selectedReminder.id}`}>
            <button className="flex items-center gap-2 bg-[#BED2F8] text-[#365F93] px-6 py-2 rounded-full font-medium hover:bg-[#8FB8E8] transition">
              <FontAwesomeIcon icon={faPenToSquare} />
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewReminder;
