'use client';
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
          animation: {
            enable: true,
            speed: 90,
            sync: true,
          },
        },
        links: {
          color: "random",
          distance: 90,
          enable: true,
          opacity: 0.5,
          width: 0.5,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: "bounce",
          random: false,
          speed: { min: 2, max: 4 },
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          animation: {
            enable: false,
            speed: 40,
            sync: false,
          },
          random: true,
          value: { min: 0.1, max: 1 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <section className="w-full h-screen bg-black">
          <div className="flex h-full">
            <div className="flex-1 flex items-center justify-center">
              <span className="text-white text-2xl">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/ursa_v03.svg"
                    alt="UrsaLink Logo"
                    className="w-100 h-100 object-contain mb-4"
                    style={{ filter: "drop-shadow(0 0 24px #fff8)" }}
                  />
                </div>
              </span>
            </div>
            <div className="flex-1 flex items-center">
              <span className="text-white text-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-flicker">UrsaLink</h1>
                <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
                  Convertimos tus procesos en soluciones digitales escalables.
                </p>
              </span>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <></>;
}
