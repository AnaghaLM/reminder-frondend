import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#FDFBF6] py-8 mt-16">
      <div className="max-w-5xl mx-auto text-center px-4">
       
        <div className="flex justify-center items-center gap-2 text-[#3C7E4D] text-2xl font-bold mb-3">
          <FontAwesomeIcon icon={faBell} />
          <span>Reminder App</span>
        </div>

       
        <p className="text-gray-600 text-base max-w-lg mx-auto mb-4 leading-relaxed">
          Stay organized and never miss a task again. Add, edit, and manage your daily reminders effortlessly.
        </p>

        
        <p className="text-gray-500 text-sm">
          Created with 💚 by{" "}
          <span className="font-semibold text-[#3C7E4D]">Anagha L M</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
