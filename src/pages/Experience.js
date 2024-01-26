import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

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
            Overall GPA: 3.907 <br />
            Honors: Gradudated with High Honors, President's List <br />
            Achievement: Member of Phi Theta Kappa Honor Society (PTK) </p>
        </VerticalTimelineElement>

        {/* UNCC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Jan 2022 -  May 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Univeristy of North Carolina at Charlotte, Charlotte, North Carolina
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor's of Science - Computer Science, Software Engineering
          </h5>
          <p>
            Overall GPA: 3.79 <br />
            Honors: Chancellor’s List (Fall 2022), Dean's List (Spring/Fall 2023) <br />
            Antipicated Gradudation Date: May 2024
          </p>
        </VerticalTimelineElement>

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
      </VerticalTimeline>
    </div>
  );
}

export default Experience;