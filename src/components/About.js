import React from "react";
import { useInView } from "react-intersection-observer";
import 'animate.css';

const aboutItems = [
  {
    label: "Project done",
    number: 5,
  },
];

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
    triggerOnce: false, 
  });

  return (
    <section
      id="about"
      className="section"
      ref={ref} 
    >
      <div
        className={`container ${
          inView ? "animate__animated animate__fadeInBottomLeft" : "animate__animated animate__fadeOutRight"
        }`}
        style={{ animationDuration: "2s" }}
      >
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hi! I&apos;m Sam, a Computer Science student at Multimedia Nusantara
            University with a passion for Web Development, UI/UX design, and
            database management. I thrive in dynamic environments, enjoy
            collaboration, and committed to continuous learning and growth.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-bold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;