import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2023</p>
          <h2 className="text-4xl font-bold">Relevant Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] 
        border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Manual Tester, QA"
            subTitle="GG development - (2023 - Present)"
            result="Budapest"
            des="Manual testing of a
            paying application (Twint) on Android and iOS devices. I’m mostly doing
            sanity, smoke and regression testing. The test cases and defects are logged in
            Jira. I’m working in an Agile (Sprint based) environment."
          />
          <ResumeCard
            title="IOS Advisor Tier 1 -"
            subTitle="IBM, - (2013 - 2014)"
            result="Budapest"
            des="Trouble shooting iOS (iPhone, iPad, iPod) devices by phone in French language."
          />
           <ResumeCard
            title="IT servicedesk agent Level 1"
            subTitle="Unisys- (2012 - 2013)"
            result="Budapest"
            des="IT trouble shooting in
            English and French languages. - The main task was to resolve IT issues by
            phone (Hardware, software, installation, authorization issues)."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Education/Training</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] 
        border-l-black border-opacity-30 flex flex-col gap-10">
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
};

export default Experience;
