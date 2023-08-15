import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFive, projectFour, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import ProjectsCardM from './ProjectCardM';
import ProjectsCardClth from './ProjectCardClth';
import ProjectsCardApp  from './ProjectCardApp';
import ProjectsCardBlog  from './ProjectCardBlog';
import ProjectNative  from './ProjectCardNative';



const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="YelpCamp"
          des=" My first full CRUD project! I’ve used: HTML5, CSS3 (with Bootstrap), JavaScript(with
            JQuery)and for the backend: NodeJS, ExpressJS, MongoDB(with Mongoose)"
          src={projectOne}
        />
        <ProjectsCardClth
          title="Crown Clothing"
          des=" A bigger ReactJS based webshop, using React Hooks, Router and Redux.
          Choose your items, put in the cart, login, logout and more!
          DB managed by: FireBase"
          src={projectTwo}
        />
        <ProjectsCardM
          title="Monsters Rodolex"
          des=" Little palyfull ReactJs based webpage. My first attempt by using React.
          You can try to find the monster by typing his/her name"
          src={projectThree}
        />

        <ProjectsCardApp
          title="ClassiFy"
          des=" This is my very first app that I created entirely on my own. The main objective is to allow users to log in and view the Workout of the Day. 
          Please be aware that this website is currently under construction, and some elements are still in development."
          src={projectFour}
        />

        <ProjectsCardBlog
          title="In2_da_Void:Blog"
          des="This is my personal Tech Blog built using Next and TypeScript. I endeavor to update it with new posts as frequently as possible. 
          My plan is to gradually enhance the interface over time."
          src={projectFive}
        />

        <ProjectNative
          title="Workout - Native App"
          des="This is a workout app made with React Native and Typescript. Choose your workout and start the countdown for some fun"
          src={projectSix}
        />
    
      </div>
    </section>
  );
}

export default Projects