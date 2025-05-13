"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="lg:py-12 px-4 sm:px-8 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Atharva',
                1000,
                'Web Developer',
                1000,
                'Data Scientist',
                1000,
                'AI Enthusiast',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mb-6">
            I’m a passionate developer with a strong foundation in web technologies, data science, and artificial intelligence. 
            I enjoy building clean, scalable solutions and continuously expanding my skill set.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Hire Me - LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sinhaatharva23/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white text-center"
            >
              Hire Me
            </a>

            {/* Download Resume */}
            <a
              href="/Atharva_Resume.pdf"
              download
              className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white inline-block text-center"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative overflow-hidden">
            <Image
              src="/images/Atharva_Hero_Section.png"
              alt="hero image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
