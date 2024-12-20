import React from "react";
import { useInView } from "react-intersection-observer";
import { ButtonPrimary, ButtonOutline } from "./Button";

const Profile = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, 
    triggerOnce: false,
  });

  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
      ref={ref}
    >
      <div
        className={`container items-center lg:grid lg:grid-cols-2 lg:gap-10 ${
          inView
            ? "animate__animated animate__fadeIn" 
            : "animate__animated animate__fadeOut" 
        }`}
      >
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/profile.jpg"
                width={40}
                height={40}
                alt="Profile Photo"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full-bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              href="https://drive.google.com/file/d/1-4Ihi6NeHLcwwvwEPviHWltft65PRwGs/view?usp=sharing"
            />

            <ButtonOutline href="#about" label="Scroll down" icon="arrow_downward" />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/image.png"
              width={656}
              height={800}
              alt="Walter Adrian Samuel"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Profile;