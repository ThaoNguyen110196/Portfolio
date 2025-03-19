import React, { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import ThemeToggle from "./ThemeToggle";

interface IProps {
  navbar: boolean;
  closeNavbar: () => void;
  navLinks: {
    title: string;
    id: string;
  }[];
}

const MobileNavbar = (props: IProps) => {
  const { navbar, closeNavbar, navLinks } = props;
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`fixed ${navbar ? "translate-x-0" : "-translate-x-full"}  ${
        isScrolled ? "bg-white dark:bg-black" : ""
      } transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[2000]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        {navLinks?.map((nav) => (
          <div
            key={nav?.title}
            onClick={() => {
              handleSmoothScroll(nav.id);
              closeNavbar();
            }}
            className={`${
              activeSection === nav.id ? "after:scale-x-100" : "after:scale-x-0"
            } relative mb-[2rem] uppercase font-semibold cursor-pointer text-[1.1rem] w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[var(--primary)] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center`}
          >
            {nav?.title}
          </div>
        ))}
      </div>
      <ThemeToggle />
      <div
        onClick={closeNavbar}
        className="absolute cursor-pointer top-[2.5rem] right-[1.4rem] w-[1.8rem] h-[1.8rem] text-[var(--primary)]"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNavbar;
