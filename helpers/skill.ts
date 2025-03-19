import bootstrap from "../app/assets/svg/skills/bootstrap.svg";
import css from "../app/assets/svg/skills/css.svg";
import git from "../app/assets/svg/skills/git.svg";
import html from "../app/assets/svg/skills/html.svg";
import java from "../app/assets/svg/skills/java.svg";
import javascript from "../app/assets/svg/skills/javascript.svg";
import mongoDB from "../app/assets/svg/skills/mongoDB.svg";
import mysql from "../app/assets/svg/skills/mysql.svg";
import nextJS from "../app/assets/svg/skills/nextJS.svg";
import php from "../app/assets/svg/skills/php.svg";
import react from "../app/assets/svg/skills/react.svg";
import tailwind from "../app/assets/svg/skills/tailwind.svg";
import typescript from "../app/assets/svg/skills/typescript.svg";
import vitejs from "../app/assets/svg/skills/vitejs.svg";
import springboot from "../app/assets/svg/skills/springboot.svg";

export const skillsImage = (skill: any) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "java":
      return java;
    case "php":
      return php;
    case "git":
      return git;
    case "springboot":
      return springboot;
    default:
      break;
  }
};
