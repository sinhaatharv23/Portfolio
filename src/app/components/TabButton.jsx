import React from "react";
import {motion} from "framer-motion";
const variants = {
  default : {width:0},
  active:{width:"calc(100%-0.75rem)"},
}
const TabButton = ({active,selectTab,children}) => {
    const buttonClasses = active ? "text-white border-b border-purple-500" : "text-[#ADB&BE]";
  return (
    <button onClick={selectTab}>
        <p className={'mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500 ${buttonClasses}'}>
        {children}
        </p>
        <motion.div animate ={active ? "active" : "default"} variants={variants} className="h-1"></motion.div>
        </button>
  );
};

export default TabButton;