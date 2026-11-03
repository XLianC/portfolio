import React from "react";
import { useInView } from "react-intersection-observer";
import 'animate.css';

const aboutItems = [
  {
    label: "Project done",
    number: 7,
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
            Hi! I’m Sam, an Informatics graduate from Multimedia Nusantara University 
            passionate about Web Development, UI/UX Design, Database Management, and 
            Artificial Intelligence. I enjoy leveraging AI tools to enhance productivity, 
            streamline development workflows, and build innovative digital solutions. I thrive 
            in collaborative environments and am committed to continuous learning, exploring 
            emerging technologies, and creating impactful user experiences.
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