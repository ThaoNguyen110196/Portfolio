"use client";

import React, { useEffect, useState } from "react";

import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skils from "@/components/Skils";
import Project from "@/components/Project";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const Home = () => {
  const [navbar, setNavbar] = useState(false);
  const openNavbar = () => setNavbar(true);
  const closeNavbar = () => setNavbar(false);
  const [loading, setLoading] = useState(true);

  const t = useTranslations("appHeader");
  const navLinks = [
    { title: t("home"), id: "home" },
    { title: t("about"), id: "about" },
    { title: t("project"), id: "project" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-hidden" id="home">
      <div>
        {/* Navbar */}
        <MobileNavbar
          navbar={navbar}
          closeNavbar={closeNavbar}
          navLinks={navLinks}
        />
        <Navbar openNavbar={openNavbar} navLinks={navLinks} />

        {/* Hero */}
        <Hero />

        <div className="relative z-[30]">
          {/* About */}
          <About />

          {/* Skils */}
          <Skils />

          {/* Project */}
          <Project />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
