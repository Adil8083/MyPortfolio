import React from "react";
import StatPoints from "../components/StatPoints";
import Logo from "../components/Logo";
import { useLocation } from "react-router-dom";
import NavigateIndicator from "../components/NavigateIndicator";
function AboutMe() {
  let location = useLocation();

  return (
    <>
      <div
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.95) 41%, rgba(0, 0, 0, 0.8)),url("https://uploads-ssl.webflow.com/606694bd40508c617a3f20fb/606bb189e183a23db0ea64c1_brad-switzer-0G3Kj9L2JH0-unsplash%20(1).jpg")`,
        }}
        className="flex flex-col justify-center items-center"
      >
        <div className="my-10">
          <NavigateIndicator path={location.pathname} />
        </div>
        <div className="w-[70%]">
          <p className="text-white font-mono md:text-5xl text-3xl pt-10 text-center font-bold">
            I'm Adil!✨
          </p>
          <p className="text-gray-300 mt-5 text-center">
            A Web Application Developer Located in Lahore, Pakistan
          </p>
          <p className="text-white text-center mt-10 font-mono font-bold text-3xl">
            Innovating the web, one line of code at a time.
          </p>
          <p className="text-gray-300 text-start mt-8 font-mono">
            Hello, I'm Adil, a passionate and creative web developer dedicated
            to crafting stunning and functional websites. With a strong
            foundation in web technologies and a keen eye for design, I strive
            to bring ideas to life through code.
          </p>
          <p className="text-gray-300 text-start mt-10 font-mono">
            My journey into the world of web development began with a simple
            curiosity that evolved into a deep-seated passion. Over the years,
            I've honed my skills in front-end and back-end development,
            mastering a wide range of programming languages, frameworks, and
            tools. Each project I undertake is an opportunity to learn,
            innovate, and push the boundaries of what's possible on the web.
          </p>
          <p className="text-gray-300 text-start mt-10 font-mono mb-10">
            I'm always eager to take on new and exciting projects. Whether
            you're a fellow developer, a business owner looking to establish a
            web presence, or anyone in between, I'd love to connect with you.
            Feel free to reach out, and let's turn your web ideas into reality!
            Thank you for visiting my portfolio. I look forward to collaborating
            with you to create exceptional web experiences.
          </p>
          {/* <p className="text-white mt-20 text-9xl italic font-mono text-center mb-10">
            Adil
          </p> */}
        </div>
      </div>
      <div className="bg-[#0e0e0e] flex justify-center items-center py-10">
        <p
          className="font-bold font-serif md:text-5xl text-2xl 
        "
        >
          Stat Points
        </p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#0e0e0e] gap-y-3 pb-5">
        <StatPoints skill={"React JS"} percentage={"80%"} />
        <StatPoints skill={"Tailwind"} percentage={"60%"} />
        <StatPoints skill={"FrontEnd Design"} percentage={"80%"} />
        <StatPoints skill={"Debugging"} percentage={"70%"} />
        <StatPoints skill={"Testing"} percentage={"60%"} />
        <StatPoints skill={"Next JS"} percentage={"20%"} />
        <StatPoints skill={"GitHub"} percentage={"70%"} />
        <StatPoints skill={"Research"} percentage={"90%"} />
      </div>
      <div className="flex justify-center items-center flex-wrap py-20 md:px-0 px-10 gap-y-10 gap-x-20 bg-[#0e0e0e] ">
        <Logo name="React JS" />
        <Logo name="Next JS" />
        <Logo name="Vite JS" />
        <Logo name="Node JS" />
      </div>
    </>
  );
}

export default AboutMe;
