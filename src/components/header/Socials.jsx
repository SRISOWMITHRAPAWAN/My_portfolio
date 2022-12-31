import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
       <a href="https://www.linkedin.com/in/srisowmithrapawan-r-518209260/" target='_blank'><BsLinkedin/></a>
       <a href="https://github.com/SRISOWMITHRAPAWAN?tab=repositories" target='_blank'><BsGithub/></a>
    </div>
  );
}

export default Socials;