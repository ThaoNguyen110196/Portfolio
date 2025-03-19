"use client";

import { useEffect, useState } from "react";

export const useThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    setTheme(savedTheme || systemTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add(theme);
      document.documentElement.classList.remove(
        theme === "dark" ? "light" : "dark"
      );
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
