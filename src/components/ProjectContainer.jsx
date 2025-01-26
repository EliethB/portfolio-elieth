import React from "react";
import Project from "./Project";
import confidential from "../img/confidencial.webp";
import Restaurant from "../img/Restaurant.jpg";
import Notes from "../img/Notes.jpg";
import SaborB from "../img/saborB.jpg";
import productCRUD from "../img/productCRUD.jpg";
import "../Card.css";
const projectData = [
  {
    title: "Eclipse Software",
    subtitle: "Accounting System",
    description: [
      "Contributed to the migration of a legacy desktop accounting system to a web-based platform, achieving 90% project completion while ensuring compliance with Costa Rican tax regulations.",
      "Utilized React.js, C#, ASP.NET, and Tailwind CSS to develop new features that enhanced the user interface and system performance.",
      "Integrated new APIs and optimized existing code, resulting in a 30% increase in efficiency and a significant reduction in bug reports.",
    ],
    imageSrc: confidential,
  },
  {
    title: "Restaurant manager",
    subtitle: "Web Application",
    description: [
      "I contributed to the development of a web-based restaurant manager, successfully completing it 100%, including necessary modules for table orders, meals, and more.",
      "A responsive design was implemented, in addition to using tools such as .NET, C#, Razor views, SQL Server, API, and version control with Git.",
      "Project published on Azure platforms to increase visibility and broaden knowledge on Azure platforms.",
    ],
    imageSrc: Restaurant,
  },
  {
    title: "Sabor Barquerito",
    subtitle: "Web Application",
    description: [
      "This project is still in progress. It includes various modules and focuses on a website featuring fast food menus. Additionally, it provides a brief history of the company and its location.",
      "This project features a responsive design and is implemented using React.js with Tailwind CSS. It includes various modules to enhance user experience, ensuring seamless navigation across devices. ",
    ],
    imageSrc: SaborB,
  },
  {
    title: "Portfolio",
    subtitle: "Web Application",
    description: [
      "I successfully completed this project 100%, which includes various modules to showcase my work and provide insights into my capabilities.",
      "This project was implemented using React with Tailwind CSS, featuring a responsive design and intuitive user interface.",
    ],
    imageSrc: Notes,
  },
  {
    title: "To Do List and categories",
    subtitle: "Web Application",
    description: [
      "I successfully developed a 100% complete CRUD application for a to-do list with categories. The CRUD functionality included adding, editing, and deleting notes or categories, as well as associating notes with specific categories.",
      "A responsive design was implemented, utilizing technologies like Node, Express, and React.js for the front end. Tailwind CSS was used for styling, and Axios was integrated for efficient API handling. The combination of these tools ensured a seamless user experience and optimized performance across devices",
    ],
    imageSrc: Notes,
  },
  {
    title: "CRUD Products and Categories",
    subtitle: "Web Application",
    description: [
      "I developed a project that consists of a CRUD for products and categories, where products can be searched by category, as well as adding, deleting, and editing categories.",
      "The project is built with .NET, C#, SQL Server, and RESTful API, utilizing Razor views and an MVC architecture. Additionally, I implemented responsive design to ensure optimal user experience across devices. ",
      "However, the real challenge of this project lies in using stored procedures for specific queries and inserting data into the database.",
    ],
    imageSrc: productCRUD,
  },
];

function ProjectsContainer() {
  return (
    <div className="container2">
      {projectData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
}

export default ProjectsContainer;
