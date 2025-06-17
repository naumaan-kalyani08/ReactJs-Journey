import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollEffectText = () => {
  const containerRef = useRef();
  const goalRef = useRef();

  useEffect(() => {
    const text = containerRef.current;
    const goal = goalRef.current;

    gsap.fromTo(
      text,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      goal,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: goal,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus qui
        sint blanditiis? Distinctio maxime laboriosam ex animi sit consequuntur
        deserunt cum magnam incidunt natus pariatur sapiente, necessitatibus
        dicta exercitationem. Saepe!
      </p>
      <div style={{ padding: "100vh 0", textAlign: "center" }}>
        <h2
          ref={containerRef}
          style={{ fontSize: "2rem", marginBottom: "3rem" }}
        >
          I always wanted to{" "}
          <span style={{ color: "#ff5733", fontWeight: "bold" }}>
            stand out
          </span>{" "}
          of competition
        </h2>
        <h3
          ref={goalRef}
          style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#0055ff" }}
        >
          Goal: To stand out of the Crowd
        </h3>
      </div>
    </div>
  );
};

export default ScrollEffectText;
