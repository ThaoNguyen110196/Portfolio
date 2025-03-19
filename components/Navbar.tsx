import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import ThemeToggle from "./ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";

interface IProps {
  openNavbar: () => void;
  navLinks: {
    title: string;
    id: string;
  }[];
}

const Navbar = (props: IProps) => {
  const { openNavbar, navLinks } = props;
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
      className={`${
        isScrolled ? " bg-white dark:bg-black" : ""
      } fixed max-w-[1920px] w-full top-0 z-[1000] transition-all duration-300 h-[12vh]`}
    >
      <div className="flex items-center justify-between xl:w-[80%] w-[90%] h-full mx-auto">
        <Link
          href="/"
          className="flex-[0.6] cursor-pointer text-[1.5rem] uppercase font-bold"
        >
          <h1>
            port<span className="text-[var(--primary)]">folio</span>
          </h1>
        </Link>
        {navLinks?.map((nav) => (
          <div
            key={nav.id}
            onClick={() => handleSmoothScroll(nav.id)}
            className={`${
              activeSection === nav.id ? "after:scale-x-100" : "after:scale-x-0"
            } relative uppercase font-semibold cursor-pointer text-[1rem] w-fit md:block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[var(--primary)] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center hidden`}
          >
            {nav.title}
          </div>
        ))}
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <LocaleSwitcher />
          <div onClick={openNavbar}>
            <Bars3Icon className="w-[1.5rem] h-[1.5rem] md:hidden cursor-pointer text-[var(--primary)]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
