import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I am Jai Vang</h2>
        <div className="prompt"> 
          <p> 
            I am a senior at the University of North Carolina at Charlotte where I am majoring in Computer Science with a 
            concentration in Software Engineering. I am a software developer student with a passion for learning and creating.
          </p>
          <p>
            I believe codes are the driving force behind every computerized device and 
            computing platform on the planet. With that, I want to use my programming 
            and design knowledge to build software that meets user needs in consumer 
            and industry-specific applications. 
          </p>
          <p>
            Check out my LinkedIn and GitHub Repository below.
          </p>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/jvang23/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          {/* GitHub */}
          <a href="https://github.com/jvang0620" target="_blank" title="GitHub" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          
        </div>
      </div>

      {/* Tech. Skill Section */}
      <div className="skills"> 
        <h1>Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, JavaScript, NPM, Yarn, HTML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, EJS, Python, Jinja, Java, Java Spring, JPS, C, C++, C# 
            </span>
          </li>
          <li className="item">
            <h2>Database/Mapper</h2>
            <span>
              AWS S3, Oracle, Hibernate, MySQL, MongoDB, MongoDB Atlas, Mongoose, 
              PostgreSQL, SQLAlchemy
            </span>
          </li>
          <li className="item">
            <h2>Software Design Pattern:</h2>
            <span>Model-View-Controller (MVC)</span>
          </li>
          <li className="item">
            <h2>Project Management:</h2>
            <span>Agile, Scrum, Trello</span>
          </li>
          <li className="item">
            <h2>UI Design Tool:</h2>
            <span>Figma, Uizard</span>
          </li>
          <li className="item">
            <h2>Version Control:</h2>
            <span>Github, Bitbucket</span>
          </li>
          <li className="item">
            <h2>IDEs:</h2>
            <span>VS Code, Visual Studio 2022, Spring Suite Tool, NetBeans, Intellij, Eclipse, CLion</span>
          </li>
          <li className="item">
            <h2>API Development & Testing:</h2>
            <span>Postman</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home