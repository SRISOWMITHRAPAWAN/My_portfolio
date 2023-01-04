import React from 'react';
import './Portfolio.css';
import animationData from '../../lotties/github.json';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData1 from '../../lotties/blog.json'
import animationData2 from "../../lotties/Hotel.json"
import animationData3 from "../../lotties/webscrap.json"
import { BiLinkExternal } from "react-icons/bi";
import { GoMarkGithub } from "react-icons/go";
import Button from '@mui/material/Button';

const projects = [
{ 
    id: 1,
    image: animationData,
    title: 'version control system',
    
   
    description: 'Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time. As development environments have accelerated, version control systems help software teams work faster and smarter. Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.',
    site:"https://github.com/SRISOWMITHRAPAWAN/version-controller-frontend",
    source:'Source Code',
    live:"https://version-controller-frontend.vercel.app/",
    livename:"Live"
},
{ 
    id: 2,
    image: animationData1,
    title: 'Blog App',
    
    description: 'A blog, also known as weblog, is a type of website that is like a diary or journal. Blog organizes content in the form of categories and posts. Posts on a blog are presented in reverse chronological order. That means your latest post goes to the top of the page. That way, when you make a new post, it will come first and the first post will go below it. Anyone can create a blog and then write on that blog. Bloggers (a word for people who write on blogs) often write about their opinions and thoughts. A blog containing video material is called a video blog or video log, usually shortened to vlog'
                  ,
    site:"https://github.com/SRISOWMITHRAPAWAN/blog_frontend",
    source:'Source Code',
    live:"https://blog-frontend-orcin-ten.vercel.app/",
    livename:"Live"

},
{ 
    id: 3,
    image:animationData2,
    title: 'Hotel Booking App',
   
    description: 'In this hotel booking app you can book hotels at specific date at various location and you can also check its availability and its specification so you can book your favourite hotel at one click.This software or application allows them to keep track and manage room booking availability, reservations.If you want to book the perfect stay you this app',
    site:"https://github.com/SRISOWMITHRAPAWAN/hotel_booking_front-end",
    source:'Source Code',
    live:"https://hotel-booking-front-end.vercel.app/",
    livename:"Live"
},
{ 
    id: 4,
    image: animationData3,
    title: 'Webscrapper',
   
    description: 'Web scraping is an automatic method to obtain large amounts of data from websites. Most of this data is unstructured data in an HTML format which is then converted into structured data in a spreadsheet or a database so that it can be used in various applications.Here i scrapped data from amazon,flipkart and snapdeal to compare iphone price easily',
    site:"https://github.com/SRISOWMITHRAPAWAN/webscrapper-frontend",
    source:'Source Code',
    live:"https://webscrapper-frontend.vercel.app/",
    livename:"Live"
},
];


const Portfolio = () => {
   
   
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        {/* <img src={project.image} alt={project.title} /> */}

                        <Player className='name'
                    autoplay
                    loop
                    src={project.image}
                    alt={project.title}
                    style={{height:"20rem"}}
                    >
                </Player>                        
                    </div> 
                    <h3>{project.title}</h3>
                   
                    
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
                    <div style={{color:"#4db5ff"}}>Tech Stack used:<br></br>   <Button variant="outlined">ReactJs</Button>&nbsp;
                    <Button variant="outlined">ExpressJs</Button>&nbsp;
                    <Button variant="outlined">MongoDB</Button>&nbsp;
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <a href={project.site} target='_blank' style={{marginTop:"1rem"}}><span style={{marginTop:"2rem"}}><GoMarkGithub/></span>&nbsp;{project.source}</a>
                    <a href={project.live} target='_blank'style={{marginTop:"1rem",marginRight:"2rem"}}><span style={{marginTop:"2rem"}}><BiLinkExternal/></span>{project.livename}</a>
                      
                    </div>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;