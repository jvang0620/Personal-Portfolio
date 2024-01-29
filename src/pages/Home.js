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
            Explore a collection of diverse projects ranging from full-stack applications to captivating web designs and interactive
            experiences. Each project reflects not only technical skills but also a commitment to crafting solutions that make a difference.
          </p>
          <p>
            Feel free to navigate through the projects, explore my technical skills, and get to know the person behind the code. 
            Connect with me on LinkedIn and explore my GitHub repositories below to witness the continuous evolution of my skills and passion.
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

          {/* Front-End */}
          <li className="item">
            <h2> Front-End</h2>
            <p>
              ReactJS, JavaScript, NPM, Yarn, HTML, CSS, BootStrap
            </p>
          </li> 
          
          <br />

          {/* Back-End */}
          <li className="item">
            <h2>Back-End</h2>
            <p>
              NodeJS, ExpressJS, EJS, Python, Jinja, Java, Java Spring, JPS, C, C++, C#
            </p>
          </li> 
          
          <br />

          {/* Database/Mapper */}
          <li className="item">
            <h2>Database/Mapper</h2>
            <p>
              AWS S3, Oracle, Hibernate, MySQL, MongoDB, MongoDB Atlas, Mongoose, 
              PostgreSQL, SQLAlchemy
            </p>
          </li>

          <br />

          {/* Softwre Design Pattern */}
          <li className="item">
            <h2>Software Design Pattern:</h2>
            <p>
              Model-View-Controller (MVC)
            </p>
          </li>

          <br />

          {/* Project Management */}
          <li className="item">
            <h2>Project Management:</h2>
            <p>
              Agile, Scrum, Trello
            </p>
          </li>

          <br />

          {/* UI Desgin Tool */}
          <li className="item">
            <h2>UI Design Tool:</h2>
            <p>
              Figma, Uizard
            </p>
          </li>

          <br />
          
          {/* Version Control */}
          <li className="item">
            <h2>Version Control:</h2>
            <p>
              Github, Bitbucket
            </p>
          </li>

          <br />

          {/* IDEs */}
          <li className="item">
            <h2>IDEs:</h2>
            <p>
              VS Code, Visual Studio 2022, Spring Suite Tool, NetBeans, Intellij, Eclipse, CLion
            </p>
          </li>

          <br />

          {/* API Devlp/Testing */}
          <li className="item">
            <h2>API Development & Testing:</h2>
            <p>
              Postman
            </p>
          </li>

          <br />

        </ol>
      </div>
    </div>
  )
}

export default Home