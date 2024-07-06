import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { motion } from "framer-motion";

const Section = (props) => {
  const { children } = props;
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = ({ onSectionChange }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection onSectionChange={onSectionChange} />
      <SkillsSection />
      <Section>
        <h1>Projects</h1>
      </Section>
      <ContactSection />
    </div>
  );
};

const AboutSection = ({ onSectionChange }) => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug text-[#1F4E79]">
        Hi, I'm
        <br />
        <span className="bg-[#1F4E79] text-white px-1 italic">
          Valay Andhariya
        </span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I create dynamic, responsive web apps using MongoDB, Express.js,
        <br />
        React.js, and Node.js. I also specialize in React Three Fiber for 3D
        <br />
        graphics. Welcome to my portfolio!
      </motion.p>
      <motion.button
        className="bg-[#FF6F3C] text-white py-4 px-8 rounded-lg font-bold text-lg mt-5"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={() => onSectionChange(3)}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Javascript",
    level: 90,
  },
  {
    title: "React",
    level: 80,
  },
  {
    title: "Node",
    level: 80,
  },
  {
    title: "Express",
    level: 75,
  },
  {
    title: "MongoDB",
    level: 60,
  },
  {
    title: "Typescript",
    level: 50,
  },
  {
    title: "React Three Fiber",
    level: 40,
  },
];

const Languages = [
  {
    title: "English",
    level: 80,
  },
  {
    title: "Hindi",
    level: 90,
  },
  {
    title: "Gujarati",
    level: 100,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => {
            return (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 1 + index * 0.2 },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-white rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#1F4E79]  rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 1 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div className="mt-10" whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Languages</h2>
        <div className="mt-8 space-y-4">
          {Languages.map((lang, index) => {
            return (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: { duration: 1, delay: 2 + index * 0.2 },
                    },
                  }}
                >
                  {lang.title}
                </motion.h3>
                <div className="h-2 w-full bg-white rounded-full mt-2">
                  <motion.div
                    className="h-full bg-[#1F4E79]  rounded-full "
                    style={{ width: `${lang.level}%` }}
                    initial={{ scaleX: 0, originX: 0 }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: { duration: 1, delay: 2 + index * 0.2 },
                      },
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-[#1F4E79]  w-96 max-w-full">
        <form>
          <label htmlFor="name" className="font-medium text-white  block mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1F4E79] p-3"
          />
          <label
            htmlFor="email"
            className="font-medium  text-white block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1F4E79]  p-3"
          />
          <label
            htmlFor="email"
            className="font-medium  text-white block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#1F4E79]  p-3"
          />
          <button className="bg-[#FF6F3C] text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
