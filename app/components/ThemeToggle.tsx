'use client';

import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <FaSun className="text-2xl text-yellow-500" />
      ) : (
        <FaMoon className="text-2xl text-gray-800" />
      )}
    </button>
  );
} 