import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

        {/* Java Devp Internship */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023 - Aug 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Java Software Developer Intern
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Rack Room Shoes Corporate Office, Charlotte, NC 
          </h5>
          <p> 
            •	Developed internal applications/business tools for the Loss Prevention Department, enhancing operational efficiency <br />
            •	Crafted responsive designs using <strong>HTML/CSS, JavaScript, jQuery, and Bootstrap </strong> <br />
            •	Engineered <strong>APIs</strong> to facilitate effective communication between the frontend and Oracle database <br />
            •	Maintained and optimized backend code, utilizing technologies such as <strong>Java, JSP, Spring, Spring Boot Microservices, Web Socket API, Hibernate</strong>, XML, and Unix, with additional tools including Toad for Oracle (Development Tool), Spring Tool Suite (IDE), Bitbucket (Git) and Apache Tomcat (Server) <br />
            •	Bolstered features such as additional filter options, mandatory fields, and dynamic data rendering <br />
            •	Collaborated with the java team to implement changes, address bugs, and elevate overall system functionality <br />
            •	Joined weekly meetings with project managers and project owners to design and integrate new functionality features <br />
            •	Worked closely with operations team using <strong>Bamboo (Continuous Integration)</strong>, to ensure seamless implementation <br />
          </p>
        </VerticalTimelineElement>

        {/* UNCC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2022 -  May 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of North Carolina at Charlotte, Charlotte, North Carolina
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor's of Science - Computer Science, Software Engineering
          </h5>
          <p>
            {/* GPA */}
            <u>Overall GPA</u>: <b>3.79</b>
            
            <br />

            {/* Honors */}
            <u>Honors</u>: Chancellor’s List (Fall 2022), Dean's List (Fall 2023) 
            
            <br />

            {/* Internship */}
            <u>Internships</u>: Java Developer Intern with Rack Room Shoes 
            
            <br />

            {/* Grad Date */}
            <u>Anticipated Graduation Date:</u> May 2024 
            
            <br /> <br />

            {/* Courses */}
            <strong>Relevant Courses:</strong>
            <ul>
              <li>Software Development Projects</li>
              <li>Network-Based App Development</li>
              <li>Software Engineering</li>
              <li>Secure Programming/Penetration Testing</li>
              <li>Information Security and Privacy</li>
              <li>Web-Based App Design and Development</li>
              <li>Database Design and Implementation</li>
              <li>Data Structures/Algorithms</li>
              <li>Human-Centered Design (UI/UX)</li>          
              <li>Operating Systems and Networking</li>
              <li>Computer System Architecture</li>                           
              <li>Artificial Intelligence</li>
              <li>Design and Implementation of Object-Oriented Systems</li>       
              <li>Software Architecture/Design</li>
              <li>Technical Communication/Writing</li>
              
            </ul>
            
            {/* Research/Writing */}
            <strong>Research/Writing Projects:</strong>
            <ul>
              <li>Ethical Impact of Autonomous Vehicles on Society</li>
              <li>Enhancement of Smart Home Features</li>
              <li>Improvement of Intelligent Vehicle Features</li>
              <li>Development of the Covid-19 NC Information App</li>
              <li>Prevention Assessment for Inject-Attacks</li>
              <li>Evaluation of Application Security</li>
              <li>Analysis of Vulnerability and Systems Assurance</li>
            </ul>  
            
            <br />
            
          </p>
        </VerticalTimelineElement>

        {/* CVCC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2020 - Dec 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Catawba Valley Community College, Hickory, North Carolina
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Associate of Science - AS
          </h5>
          <p> 
            <u>Overall GPA</u>: <b>3.907</b> <br />
            <u>Honors</u>: Gradudated with High Honors, President's List <br />
            <u>Achievement</u>: Member of Phi Theta Kappa Honor Society (PTK) </p>
        </VerticalTimelineElement>

        {/* Centro */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2006 - Feb 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Senior Product Inspector Finisher
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Centro, Inc, Claremont, North Carolina
          </h5>
          <p>
            • Assembled products in accordance with customer specifications and requests <br />
            • Maintained efficiency and scrap standards, packaged and prepared products for shipments <br />
            • Assisted with training new team members <br />
            • Collaborated with team members to successfully complete tasks <br />
            • Effectively communicated with supervisors and team members <br />
          </p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;