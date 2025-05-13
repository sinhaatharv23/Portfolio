"use client";
import React, {useState,useRef } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';
import {inView, motion,useInView} from 'framer-motion';
const projectsData = [
  {
    id: 1,
    title: "Book Easy Website",
    description: "Event booking platform",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather Forecasting Website",
    description: "Real-time weather updates",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 3,
    title: "Expense Tracker Website",
    description: "Track your expenses easily",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag,setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const handleTag = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) => 
      project.tag.includes(tag)
  );
  const cardVariants = {
    initial:{y:50 , opacity:0 },
    animate:{y:0 , opacity:1 },
  };
  console.log("Projects Data:", projectsData);  // Ensure data is loaded

  return (
    <section>
      <h2 className="text-3xl text-white mb-6">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
       <ProjectTag onClick={handleTag} name = "All" isSelected= {tag === "All"} />
      <ProjectTag onClick={handleTag} name = "Web" isSelected= {tag === "Web"} />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProjects.map((project,index) => (
          <motion.li variants={cardVariants} initial ="initial" animate={inView? "animate" : "initial"} key={index} transition={{duration:0.3,delay:index*0.4}}>
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
