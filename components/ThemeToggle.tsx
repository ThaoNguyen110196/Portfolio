"use client";

import { useThemeToggle } from "@/hooks/use-theme-toggle";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import React from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <div onClick={toggleTheme} className="cursor-pointer">
      {theme === "dark" ? (
        <MoonIcon className="w-[1.5rem] h-[1.5rem]" />
      ) : (
        <SunIcon className="text-[var(--primary)] w-[1.5rem] h-[1.5rem]" />
      )}
    </div>
  );
};

export default ThemeToggle;
