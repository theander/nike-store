import { BiSun, BiMoon } from "react-icons/bi";
import { useEffect } from "react";

export function DarkMode() {
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleDarkMode}
        className="shadow-lg text-white bg-night-50 px-4 py-2 rounded-full dark:bg-white dark:text-night"
      >
        <BiSun className="hidden dark:block" />{" "}
        <BiMoon className="dark:hidden" />
      </button>
    </div>
  );
}
