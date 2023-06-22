import React from 'react'
import { FaFacebookF, FaLinkedinIn, } from "react-icons/fa";
import {useNavigate, Link} from 'react-router-dom';

const Media = () => {

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF to="/https://www.facebook.com/palasti.pierre/'" /> 
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        
      </div>
  )
}

export default Media