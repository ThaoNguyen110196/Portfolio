import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Frontend developer",
        1500,
        "Backend developer",
        1500,
        "Web developer",
        1500,
      ]}
      wrapper="span"
      speed={50}
      className="text-[1.8rem] xl:text-[2.8rem] font-bold uppercase text-secondary"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
