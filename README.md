# Portfolio App

![Protfolio App Homepage](src/assets/readme_img/homepage.PNG)

## Table of Contents

1. [Project Overview](#project-overview)
2. [What's Inside](#whats-inside)
3. [Journey Through Time](#journey-through-time)
4. [Let's Connect](#lets-connect)
5. [Developed Using](#developed-using)
6. [Project Structure](#project-structure)
   - [Pages](#pages)
   - [Components](#components)
   - [Helpers](#helpers)
7. [How is React Used In The Portfolio Application](#how-is-react-used-in-the-portfolio-application)
   - [Router and Routes in App.js](#router-and-routes-in-appjs)
   - [Extracting Parameters from the URL](#extracting-parameters-from-the-url)
   - [Experiences Components](#experiences-components)
   - [Navbar Components](#navbar-components)
   - [ProjectItem Components](#projectitem-components)

#### Project Overview

Welcome to my project! 🚀 This application is a culmination of creativity, dedication, and my journey of coding. As a computer science enthusiast and software engineering student, I've poured my passion for learning and creating into every line of code.

#### What's Inside

Explore a collection of diverse projects ranging from full-stack applications to captivating web designs and interactive experiences. Each project reflects not only technical skills but also a commitment to crafting solutions that make a difference.

#### Journey Through Time

Dive into the timeline of my experiences, from academic achievements to real-world challenges as a software developer intern. TThis journey encapsulates my growth, from assembling products with precision to crafting intricate software solutions.

#### Let's Connect

Feel free to navigate through the projects, explore my technical skills, and get to know the person behind the code. Connect with me on [LinkedIn](https://www.linkedin.com/in/jvang23/). and explore my [GitHub](https://github.com/jvang0620/) repositories to witness the continuous evolution of my skills and passion.

Thank you for joining me on this coding adventure. Let's build something amazing together! 🌟

#### Developed Using:

![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS-red?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black)

## Project Structure

The project is organized into different sections:

##### Pages:

- <u>Home</u>: Displays a brief introduction and technical skills.
- <u>Projects</u>: Lists personal projects with descriptions and links.
- <u>Experience</u>: Provides a timeline of educational and work experiences.

##### Components:

- <u>Navbar</u>: Navigation bar with links to different sections.
- <u>Footer</u>: Displays social media links and copyright information.
- <u>ProjectItem</u>: Represents an individual project item.

##### Helpers:

- <u>ProjectList</u>: Contains an array of project data.

## How is React Used In The Portfolio Application

In the app, React is utilized to create a dynamic and responsive user interface. Notable usage includes:

##### Router and Routes in the App.js:

- The `react-router-dom` library is used for navigation between different pages and handling routing.
- The `<Router>` component is used from `react-router-dom` to wrap the entire application and enable routing functionality.
- Inside `<Routes>`, several `<Route>` components are defined, each corresponding to a specific route and rendering a specific component (`Home, Projects, ProjectDisplay, Experience`) based on the route path.

  ```JavaScript
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

  function App() {
  return (
      <div className="App">
      <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
      </Router>
      </div>
  );
  }

  ```

##### Extracting Parameters from the URL:

- The `useParams` hook from React Router is used to extract the `id` parameter from the URL.
- The `id` parameter is used to retrieve the corresponding project from the `ProjectList`.

  ```JavaScript
  import React from "react";
  import { useParams } from "react-router-dom";

  const { id } = useParams();
  const project = ProjectList[id];
  ```

##### Experiences Components:

- React is used to structure and render a timeline of work and education experiences. The `VerticalTimeline` and `VerticalTimelineElement` components help create a visually appealing timeline, and React is used to dynamically render the content for each timeline element based on the data provided.

  ```JavaScript
  import React from "react";
  import {
  VerticalTimeline,
  VerticalTimelineElement,
  } from "react-vertical-timeline-component";

  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="Apr 2006 - Feb 2021"
  iconStyle={{ background: "#e9d35b", color: "#fff" }}
  icon={<WorkIcon />}
  >
  {/* Content of the timeline element */}
  </VerticalTimelineElement>
  ```

- The content inside each `VerticalTimelineElement` includes details such as job/education title, date, icon, and a description.
- Each `VerticalTimelineElement` contains details about a specific work or education experience.

  ```JavaScript
  <h3 className="vertical-timeline-element-title">Senior Product Inspector Finisher</h3>
  <h5 className="vertical-timeline-element-subtitle">Centro, Inc, Claremont, North Carolina</h5>
  <p>
    {/* Description of the work or education experience */}
  </p>
  ```

##### Navbar Components:

- React is used in the `Navbar` component to manage the state of the navigation bar, respond to changes in the location (using `react-router-dom`), and render a dynamic navigation bar with a toggle button for mobile responsiveness.

```JavaScript
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
```

- State Management with `useState`:

  - Use the `useState` hook to manage the state of expandNavbar, which determines whether the navigation bar is expanded or collapsed.

  ```JavaScript
  const [expandNavbar, setExpandNavbar] = useState(false);
  ```

- Location and Effect with `useLocation` and `useEffect`:

  - Use the useLocation hook from `react-router-dom` to get the current location.
  - Use the `useEffect` hook to update the state (`'expandNavbar'`) when the location changes. This ensures that the mobile menu is closed when navigating to a new page.

  ```JavaScript
  const location = useLocation();

  useEffect(() => {
  setExpandNavbar(false);
  }, [location]);
  ```

- Render JSX for Navigation Bar:

  - Use JSX to define the structure of the navigation bar.
  - The navigation bar has a toggle button (`'ReorderIcon'`) for mobile responsiveness and a list of links (`'Link'`) to navigate between different sections of the app.

##### ProjectItem Components:

- React is used in the `ProjectItem` component to create a reusable project item that can be clicked to navigate to the details page for a specific project.
- The `useNavigate` hook facilitates programmatic navigation within the application.
- The `useNavigate` hook is used to get access to the navigation object.
- This hook allows for programmatic navigation to different routes.

  ```JavaScript
  import React from "react";
  import { useNavigate } from "react-router-dom";

  function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
      <div
      className="projectItem"
      onClick={() => {
          navigate("/project/" + id);
      }}
      >
    );
  }
  ```
