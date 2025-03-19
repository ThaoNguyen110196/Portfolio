import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

import avatar from "../app/assets/avatar.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/action/variants";

const About = () => {
  const locale = useLocale();

  return (
    <motion.div
      variants={fadeIn({ direction: "up", delay: 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      id="about"
      className="pb-[3rem] pt-[4rem] md:pt-[8rem]"
    >
      <div className="flex items-center flex-col xl:flex-row gap-[3rem] w-[90%] xl:w-[80%] mx-auto">
        <div className="relative w-full h-[300px] xl:w-[400px] xl:h-[400px]">
          <div className="relative w-2/3 h-2/3 z-[10] bg-gradient-to-r from-[var(--secondary)] from-0% to-[var(--primary)] top-[-1rem] left-[-1rem]" />
          <Image
            src={avatar}
            alt="user"
            layout="fill"
            className="relative z-[11] w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="relative w-full">
          <h1 className="text-xl font-bold uppercase mb-[1rem] text-secondary">
            {locale === "vi" ? "Giới thiệu" : "Introduction"}
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl md:leading-[3rem] leading-[2rem] capitalize mb-[2rem] font-bold">
            {locale === "vi" ? "Về " : "About "}
            <span className="text-[var(--primary)]">
              {locale === "vi" ? "Tôi" : "Me"}
            </span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10 border-l-none md:border-l border-[var(--primary)] pl-none md:pl-5">
            <div>
              <h6 className="text-xl w-full text-gray-600 dark:text-gray-400">
                {locale === "vi" ? "Tôi là " : "I'm "}{" "}
                <span className="font-bold text-[var(--primary)]">Thảo</span>,{" "}
                {locale === "vi"
                  ? " một nhà phát triển frontend và backend đầy nhiệt huyết với kinh nghiệm xây dựng các dự án sử dụng"
                  : " a passionate frontend and backend developer with experience in building projects using"}
                <span className="font-bold text-[var(--secondary)]">
                  &nbsp;HTML, CSS, JavaScript, TypeScript, PHP, C#, Java
                </span>
                .
                {locale === "vi"
                  ? " Tôi đã làm việc với các công nghệ và framework hiện đại như"
                  : " I have worked with modern technologies and frameworks, including"}
                <span className="font-bold text-[var(--secondary)]">
                  &nbsp;React, Next.js, Bootstrap, Tailwind CSS, Ant Design,
                  Spring Boot, Laravel, ASP.NET
                </span>
                ,
                {locale === "vi"
                  ? " thông qua dự án cá nhân và nhóm. Với nền tảng vững chắc về phát triển frontend và backend, tôi nỗ lực xây dựng các ứng dụng hiệu quả, có khả năng mở rộng và thân thiện với người dùng"
                  : " through personal and group projects. With a strong foundation in both frontend and backend development, I strive to build efficient, scalable, and user-friendly applications"}
                .
              </h6>
              <div className="flex flex-col md:flex-row gap-10 mt-[2rem]">
                <div className="text-center md:text-start">
                  <h6 className="font-bold uppercase">
                    {locale === "vi" ? "Tuổi" : "Age"}
                  </h6>
                  <span className="whitespace-nowrap text-gray-600 dark:text-gray-400">
                    30 {locale === "vi" ? "tuổi" : "years"}
                  </span>
                </div>
                <div className="text-center md:text-start">
                  <h6 className="font-bold uppercase">
                    {locale === "vi" ? "Nơi ở" : "Born In"}
                  </h6>
                  <span className="whitespace-nowrap text-gray-600 dark:text-gray-400">
                    {locale === "vi"
                      ? "Hồ Chí Minh, Việt Nam"
                      : "Ho Chi Minh city, VietNam"}
                  </span>
                </div>
                <div className="text-center md:text-start">
                  <h6 className="font-bold uppercase">
                    {locale === "vi" ? "Số điện thoại" : "Phone"}
                  </h6>
                  <span className="whitespace-nowrap text-gray-600 dark:text-gray-400">
                    +84-775-861-578
                  </span>
                </div>
                <div className="text-center md:text-start">
                  <h6 className="font-bold uppercase">E-Mail</h6>
                  <span className="whitespace-nowrap text-gray-600 dark:text-gray-400">
                    nttthao110196@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
