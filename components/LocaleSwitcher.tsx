"use client";

import React, { useState, useEffect, useRef } from "react";
import setLanguageValue from "@/action/set-language-action";
import viet from "../app/assets/svg/language/vi.svg";
import eng from "../app/assets/svg/language/en.svg";
import Image from "next/image";

const LocaleSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(savedLanguage);
  }, []);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageValue(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        aria-label="Select Language"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={selectedLanguage === "vi" ? viet : eng}
          alt="language"
          width={20}
          height={20}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-[8rem] shadow-lg rounded-md border bg-white dark:bg-black whitespace-nowrap">
          <button
            className="flex items-center w-full px-3 py-2 hover:bg-gray-100 hover:dark:bg-gray-900 rounded-t-md"
            onClick={() => handleLanguageChange("en")}
          >
            <Image
              src={eng}
              alt="English"
              width={20}
              height={20}
              className="mr-2"
            />
            English
          </button>
          <button
            className="flex items-center w-full px-3 py-2 hover:bg-gray-100 hover:dark:bg-gray-900 rounded-b-md"
            onClick={() => handleLanguageChange("vi")}
          >
            <Image
              src={viet}
              alt="Vietnamese"
              width={20}
              height={20}
              className="mr-2"
            />
            Tiếng Việt
          </button>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
