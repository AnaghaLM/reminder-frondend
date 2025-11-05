import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import {searchReminders} from "../redux/slice/reminderSlice"
import { useDispatch } from "react-redux";
function Header() {


  const dispatch= useDispatch()
  return (
    <header className="bg-[#98EFAB] py-5 shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
        
      
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBell} className="text-gray-800 text-xl" />
          <h1 className="text-2xl font-bold text-gray-800 ">
            Reminder App
          </h1>
        </div>

       
        <div className="relative flex-1 max-w-md">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-2.5 text-gray-600"
          />
          <input
            type="text"
            placeholder="Search reminders..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#B9F5A9] text-gray-800 placeholder-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-[#F6D7DE] transition"
            onChange={(e)=>dispatch(searchReminders(e.target.value.toLowerCase()))}
          />
        </div>

       
        <Link to="/add-reminder">
          <button className="flex items-center gap-2 bg-[#F8F8B0] text-gray-800 font-semibold px-4 py-2 rounded-full hover:bg-[#F6D7DE] transition">
            <FontAwesomeIcon icon={faPlus} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
