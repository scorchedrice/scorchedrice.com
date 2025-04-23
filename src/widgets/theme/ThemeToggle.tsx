import React from "react";
import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark"); // dark라는 클래스 명 추가
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center rounded-full bg-blue-200 dark:bg-gray-700 px-1 transition-colors duration-300"
    >
      {/* 아이콘 뒤에 배치 */}
      <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
        <Sun className="w-4 h-4 text-orange-500" />
        <Moon className="w-4 h-4 text-yellow-500" />
      </div>

      {/* 슬라이더 (흰 원) */}
      <div
        className={`w-6 h-6 rounded-full bg-white z-10 transition-transform duration-300 ${
          isDark ? "translate-x-0" : "translate-x-6"
        }`}
      />
    </button>
  )
}