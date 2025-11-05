import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
 import { filterByCategory } from "../redux/slice/reminderSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchAllReminders ,deleteReminder } from "../redux/slice/reminderSlice"; 

function ReminderList() {
 
  const dispatch = useDispatch();

  
  const { loading, allReminders} = useSelector((state) => state.reminders);

  
  useEffect(() => {
    dispatch(fetchAllReminders());
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF6]">
      <Header />

    <nav className="bg-[#E8F8EF] border-y border-[#98EFAB] mt-0 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-center sm:justify-between flex-wrap items-center gap-6 py-3 px-6">
        
        <button
          onClick={() => dispatch(filterByCategory("All"))}
          className="text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#98EFAB] hover:text-white "
        >
          All
        </button>

        <button
          onClick={() => dispatch(filterByCategory("Work"))}
          className="text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#98EFAB] hover:text-white "
        >
          Work
        </button>

        <button
          onClick={() => dispatch(filterByCategory("Personal"))}
          className="text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#98EFAB] hover:text-white "
        >
          Personal
        </button>

        <button
          onClick={() => dispatch(filterByCategory("Study"))}
          className="text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#98EFAB] hover:text-white "
        >
          Study
        </button>

        <button
          onClick={() => dispatch(filterByCategory("Health"))}
          className="text-gray-700 font-medium px-4 py-2 rounded-full hover:bg-[#98EFAB] hover:text-white "
        >
          Health
        </button>
      </div>
    </nav>

    
      {loading && (
        <div className="text-center py-10 text-gray-500 text-lg">
          Loading reminders...
        </div>
      )}
      
     
     
      <div className="max-w-6xl mx-auto mt-10 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReminders && allReminders.length > 0 ? (
            allReminders.map((reminder) => (
              <div
                key={reminder.id}
                className={`${reminder.color} rounded-3xl p-6 hover:scale-[1.02] transition-transform duration-200`}
              >
                <p className="text-sm text-gray-600 mb-1">{reminder.category}</p>
                <h2 className="text-lg font-semibold text-gray-800">{reminder.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{reminder.date}</p>

                <div className="flex justify-end gap-3 mt-5 text-gray-600 text-lg">
                  <Link to={`/view/${reminder.id}`}>
                    <button className="p-2 rounded-full hover:bg-[#B9F5A9] text-[#3C7E4D] transition">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </Link>
                  <button  onClick={() => dispatch(deleteReminder(reminder.id))} className="p-2 rounded-full hover:bg-[#F6D7DE] text-[#8B3A4B] transition">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="text-center text-gray-500 text-lg">
                No reminders found
              </div>
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ReminderList;
