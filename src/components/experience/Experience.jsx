import React from 'react';
import "./Experience.css";
import {FaReact, FaHtml5, FaGithub} from 'react-icons/fa';
import {SiJavascript, SiBootstrap, SiCss3, SiMysql, SiMongodb,SiVercel,SiHeroku,SiPostman,SiExpress} from 'react-icons/si';
import {MdHttp} from 'react-icons/md';
import {TbBrandNextjs} from 'react-icons/tb';
import {DiNodejs} from "react-icons/di"


const Experience = () => {
  return (
    <section id='experience'>
        <h5>Technology Stack</h5>
        <h2>My Skills</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Front End</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaReact className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>React.js</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>JavaScript</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiBootstrap className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>BootStrap</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <FaHtml5 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>HTML</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiCss3 className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>CSS</h4>
                        </div>
                    </article>
                   
                </div>
            </div>

            <div className="experience__backend">
            <h3>Back End & DataBase</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <DiNodejs className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Nodejs</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiExpress className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Expressjs</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiMysql className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>MySql</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiMongodb className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>MongoDB</h4>
                        </div>
                    </article>
                           
                </div>
            </div>

            <div className="experience__backend">
            <h3>Tools</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <FaGithub className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Github</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiVercel className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Vercel</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiHeroku className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>Heroku</h4>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiPostman className='experience__details-icon'/>
                        <div className='experience__details-name'>
                            <h4>postman</h4>
                        </div>
                    </article>
                             
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;