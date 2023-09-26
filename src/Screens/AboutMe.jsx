import React from "react";
import StatPoints from "../components/StatPoints";
import Logo from "../components/Logo";
import { useLocation } from "react-router-dom";
import NavigateIndicator from "../components/NavigateIndicator";
import Journey from "../components/Journey";
function AboutMe() {
  let location = useLocation();

  return (
    <>
      <div
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.95) 41%, rgba(0, 0, 0, 0.8)),url("https://uploads-ssl.webflow.com/606694bd40508c617a3f20fb/606bb189e183a23db0ea64c1_brad-switzer-0G3Kj9L2JH0-unsplash%20(1).jpg")`,
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="my-10">
          <NavigateIndicator path={location.pathname} />
        </div>
        <div className="w-[70%]">
          <p className="pt-10 text-center font-mono text-3xl font-bold text-white md:text-5xl">
            I'm Adil!✨
          </p>
          <p className="mt-5 text-center text-gray-300">
            A Web Application Developer Located in Lahore, Pakistan
          </p>
          <p className="mt-10 text-center font-mono text-3xl font-bold text-white">
            Innovating the web, one line of code at a time.
          </p>
          <p className="mt-8 text-start font-mono text-gray-300">
            Hello, I'm Adil, a passionate and creative web developer dedicated
            to crafting stunning and functional websites. With a strong
            foundation in web technologies and a keen eye for design, I strive
            to bring ideas to life through code.
          </p>
          <p className="mt-10 text-start font-mono text-gray-300">
            My journey into the world of web development began with a simple
            curiosity that evolved into a deep-seated passion. Over the years,
            I've honed my skills in front-end and back-end development,
            mastering a wide range of programming languages, frameworks, and
            tools. Each project I undertake is an opportunity to learn,
            innovate, and push the boundaries of what's possible on the web.
          </p>
          {/* <p className="mb-10 mt-10 text-start font-mono text-gray-300">
            I'm always eager to take on new and exciting projects. Whether
            you're a fellow developer, a business owner looking to establish a
            web presence, or anyone in between, I'd love to connect with you.
            Feel free to reach out, and let's turn your web ideas into reality!
            Thank you for visiting my portfolio. I look forward to collaborating
            with you to create exceptional web experiences.
          </p> */}
          {/* <p className="text-white mt-20 text-9xl italic font-mono text-center mb-10">
            Adil
          </p> */}
          <p className="mt-8 text-center font-mono text-3xl uppercase text-white">
            Journey
          </p>
          <div className="mt-5 flex flex-wrap justify-between px-20">
            <section className="w-max">
              <h1 className="mb-5 text-center">EDUCATION</h1>
              <Journey content="education" />
            </section>
            <section className="w-max">
              <h1 className="mb-5 text-center">EXPERIENCE</h1>
              {/* <Journey content="experience" /> */}
            </section>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#0e0e0e] py-10">
        <p
          className="font-serif text-2xl font-bold md:text-5xl 
        "
        >
          Stat Points
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-3 bg-[#0e0e0e] pb-5">
        <StatPoints skill={"React JS"} percentage={"80%"} />
        <StatPoints skill={"Tailwind"} percentage={"60%"} />
        <StatPoints skill={"FrontEnd Design"} percentage={"80%"} />
        <StatPoints skill={"Debugging"} percentage={"70%"} />
        <StatPoints skill={"Testing"} percentage={"60%"} />
        <StatPoints skill={"Next JS"} percentage={"20%"} />
        <StatPoints skill={"GitHub"} percentage={"70%"} />
        <StatPoints skill={"Research"} percentage={"90%"} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10 bg-[#0e0e0e] px-10 py-20 md:px-0 ">
        <Logo name="React JS" />
        <Logo name="Next JS" />
        <Logo name="Vite JS" />
        <Logo name="Node JS" />
      </div>
    </>
  );
}

export default AboutMe;
