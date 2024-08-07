import React, { useState, useEffect } from "react";
import { IoCloudyNightSharp } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";

const DarkMode: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="cursor-pointer border border-black dark:border-white rounded-md w-20 flex flex-row justify-center items-center bg-white text-black dark:text-white dark:bg-black dark:before:content-['Dark'] before:content-['Light']"
    >
      <div className="cursor-pointer rounded-md p-2">
        {darkMode ? (
          <div className="text-xl text-orange-400">
            <MdLightMode />
          </div>
        ) : (
          <div className="text-xl text-black">
            <IoCloudyNightSharp />
          </div>
        )}
      </div>
    </div>
  );
};

export default DarkMode;
