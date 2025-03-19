import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useThemeToggle } from "@/hooks/use-theme-toggle";

const Particle = () => {
  const [init, setInit] = useState(false);
  const { theme } = useThemeToggle();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
    }
  }, []);

  const getPrimaryColor = () => {
    return (
      getComputedStyle(document.documentElement).getPropertyValue(
        "--primary"
      ) || "#000000"
    );
  };

  return (
    <>
      {init && (
        <Particles
          key={theme}
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: { enable: true },
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: getPrimaryColor() },
              links: {
                color: getPrimaryColor(),
                distance: 130,
                // enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
                value: 80,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default Particle;
