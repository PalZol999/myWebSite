import React from 'react'
import Title from '../layouts/Title';

import { Linkln } from "../../assets/index";
import { fb } from "../../assets/index";


const Contact = () => {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center ;">
        <Title title="CONTACT" des="My contact" />
      </div>
      <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center mx-auto">

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white">Zoltan Palasti</h3>
          <p className="text-lg font-normal text-gray-400">Jr. Frontend Developer</p>
          <p className="text-base text-gray-400 tracking-wide">I am self-taught web developer 
          who's got a passion for Frontend development and design</p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Phone: <span className="text-lightText">+36 702754418</span>
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">p.z.palasti@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <img src={fb} alt="gitHub" onClick={() => openInNewTab('https://www.facebook.com/palasti.pierre/')}/>
            </span>
            <span className="bannerIcon">
            <img src={Linkln} alt="gitHub" onClick={() => openInNewTab('https://www.linkedin.com/in/zoltan-palasti-86a744118/')}/>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Contact