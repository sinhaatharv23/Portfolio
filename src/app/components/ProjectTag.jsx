import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
    const buttonStyles = isSelected ? "text-white border-purple-500 bg-[#181818]" : "text-[#ADB7BE] border-slate-600 hover:border-purple-500"
  return ( 
  <button className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300 ${buttonStyles}`} onClick={() => onClick(name)}>
   {name}
    </button>
  );
};

export default ProjectTag;