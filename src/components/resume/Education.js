import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of DVI (2006 - 2010)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Complete React Developer"
            subTitle="2023"
            result="Udemy"
            des="ReactJS based webshop, by using React Hooks, Router and Redux. 
            I'm currently doing this course. Please note: a TypeScript session is included"
          />
          <ResumeCard
            title="JavaScript: The Advanced Concepts"
            subTitle="2023"
            result="Udemy"
            des="Basic knowledge of OOP and Functional programing with
            JavaScript.
            From understanding what is primitive data type to the “this”
            key word. Defining closure, higher order function, call back
            and many more. With a little touch of data structure and
            algorith."
          />
          <ResumeCard
            title="The Web Developer Bootcamp 2023 (with ReactJS
              extension)"
            subTitle="2023"
            result="Udemy"
            des="I’ve leraned to used: HTML5, CSS3 (with Bootstrap), JavaScript(with
              JQuery), NodeJS, ExpressJS, MongoDB(with Mongoose)."
          />
           <ResumeCard
            title="Software UI Automation Testing using Java-Selenium
            Web Driver from A-Z"
            subTitle="2022"
            result="Udemy"
            des="I’ve learned basic Java to using Selenium framework. The course was based
            mostly on web browser automation testing"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education