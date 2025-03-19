import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

import { PROJECTS } from "@/helpers/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/action/variants";

const Project = () => {
  const locale = useLocale();

  return (
    <motion.div
      variants={fadeIn({ direction: "up", delay: 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      id="project"
      className="pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <h1 className="heading">
        {locale === "vi" ? "Dự " : "Pro"}
        <span className="text-[var(--primary)]">
          {locale === "vi" ? "Án" : "ject"}
        </span>
      </h1>
      <div className="xl:w-[80%] w-[90%] pt-[5rem] mx-auto">
        <div className="relative group grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem]">
          {PROJECTS.map((project) => (
            <div
              key={project?.id}
              className="group-hover:blur-xs hover:!blur-none hover:z-[10] hover:text-[var(--secondary)] hover:scale-none hover:lg:scale-115 card-wrapper"
            >
              <div className="card-content relative flex flex-col">
                <div className="w-full h-full md:h-[300px] relative">
                  <Image
                    src={project?.imgPath}
                    alt="project"
                    className="h-full w-full object-fill"
                  />
                </div>
                <div className="relative p-5 flex flex-col flex-grow">
                  <div className="mb-5">
                    <h6 className="font-bold text-xl">{project?.title}</h6>
                    <p className="mt-4 font-normal text-base text-gray-600 dark:text-gray-400">
                      {project?.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href={project?.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group w-fit mt-auto"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                      <button className="relative cursor-pointer px-3 py-2 bg-black text-white rounded-lg leading-none flex items-center">
                        <div className="flex items-center space-x-2 text-base">
                          GitHub
                        </div>
                      </button>
                    </Link>
                    {project?.demoLink && (
                      <Link
                        href={project?.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group w-fit mt-auto"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
                        <button className="relative cursor-pointer px-3 py-2 bg-white text-black rounded-lg leading-none flex items-center">
                          <div className="flex items-center space-x-2 text-base">
                            Demo
                          </div>
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
