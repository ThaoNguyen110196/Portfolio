import React from "react";

import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "../action/variants";

import avatar from "../app/assets/avatar.jpg";
import Link from "next/link";

const Hero = () => {
  const locale = useLocale();

  return (
    <div className="h-[50vh] pt-[4rem] md:pt-[8rem] my-[8rem]">
      <Particle />
      <div className="w-[90%] xl:w-[80%] h-full flex items-center flex-row justify-between gap-5 mx-auto">
        <motion.div
          variants={fadeIn({ direction: "right", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-[2rem] xl:text-[3rem] font-bold">
            {locale === "vi" ? "Xin chào, tôi là " : "Hi, I'm "}
            <span className="text-[var(--primary)]">Thảo!</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-base text-gray-600 dark:text-gray-400"></p>
          <div className="relative group w-fit mt-[2rem]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <Link
              href="https://www.topcv.vn/xem-cv/VAlTAwACAAICBlIBAQMGAF4BBARWVAIOUQoAUgb9f5"
              target="_blank"
              rel="noopener noreferrer"
              className="relative cursor-pointer px-[2rem] py-[1rem] bg-black text-white rounded-lg leading-none flex items-center"
            >
              <div className="flex items-center space-x-2 text-base font-bold uppercase">
                <p>Resume</p>
              </div>
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: "left", delay: 0.2 })}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="w-[350px] h-[350px] xl:w-[500px] xl:h-[500px] hidden relative lg:flex items-center rounded-full"
        >
          <Image
            src={avatar}
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
