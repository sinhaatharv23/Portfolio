"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Book Easy Website",
    description: "Event booking platform",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sinhaatharv23/book-easy.git",
    previewUrl: "https://book-easy-three.vercel.app/",
  },
  {
    id: 2,
    title: "Weather Forecasting Website",
    description: "Real-time weather updates",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sinhaatharv23/Weather_Forecasting_App.git",
  },
  {
    id: 3,
    title: "Expense Tracker Website",
    description: "Track your expenses easily",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sinhaatharv23/Expense_Tracker_Project.git",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTag = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl text-white mb-6">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTag} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTag} name="Web" isSelected={tag === "Web"} />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            key={index}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
