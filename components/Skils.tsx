import { SKILLS_DATA } from "@/helpers/data";
import { skillsImage } from "@/helpers/skill";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { fadeIn } from "@/action/variants";

const Skils = () => {
  const locale = useLocale();

  return (
    <motion.div
      variants={fadeIn({ direction: "left", delay: 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="pb-[3rem] pt-[4rem] md:pt-[8rem]"
    >
      <h1 className="heading">
        {locale === "vi" ? "Học vấn" : "Education"} &
        <span className="text-[var(--primary)]">
          {locale === "vi" ? " Kỹ năng" : " Skill"}
        </span>
      </h1>
      <div className="xl:w-[80%] w-[90%] mx-auto pt-[4rem] md:pt-[8rem] grid items-center grid-cols-1 gap-[1rem]">
        <div className="mb-[2rem] md:mb-[4rem]">
          <span className="px-[2rem] py-[0.9rem] font-bold text-xl text-[var(--secondary)] border-[2px] border-[var(--secondary)] rounded-md">
            2011 - 2014
          </span>
          <h1 className="mt-[2rem] font-semibold mb-[1rem] text-xl sm:text-2xl md:text-3xl uppercase">
            Tan Phong High School, Vietnam
          </h1>
        </div>
        <div className="mb-[2rem] md:mb-[4rem]">
          <span className="px-[2rem] py-[0.9rem] font-bold text-xl text-[var(--secondary)] border-[2px] border-[var(--secondary)] rounded-md">
            2023 - 2025
          </span>
          <h1 className="mt-[2rem] font-semibold mb-[1rem] text-xl sm:text-2xl md:text-3xl uppercase">
            Advanced Diploma In Software Engineering - FPT Aptech
          </h1>
          <p className="font-normal text-base text-gray-600 dark:text-gray-400">
            Subjects: Java, .Net, C#, NodeJS, PHP, MongoDB,...
          </p>
        </div>
      </div>
      <div className="xl:w-[80%] w-[90%] mx-auto flex items-center">
        <div className="relative group flex items-center w-full">
          <Marquee
            autoFill
            gradient={false}
            speed={50}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {SKILLS_DATA.map((skill, id) => (
              <div
                className="mx-5 my-5 group-hover:blur-xs hover:!blur-none hover:text-[var(--secondary)] hover:scale-125 card-wrapper h-[120px] w-[120px]"
                key={id}
              >
                <div className="card-content flex flex-col gap-2 items-center justify-center">
                  <Image
                    src={skillsImage(skill)}
                    alt={skill}
                    className="w-10 h-10"
                  />
                  <p className="font-semibold text-md">{skill}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};

export default Skils;
