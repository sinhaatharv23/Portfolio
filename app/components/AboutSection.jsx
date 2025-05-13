import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Computer.png" width={500} height={500} alt="Computer" />
        <div>
          <h2>About Me</h2>
          <p>
            Hi! I’m a passionate and driven web developer currently exploring the MERN stack and eager to build innovative applications. 
            My journey in coding began with a solid understanding of core computer science subjects like DBMS, Linux, and Operating Systems, 
            complemented by hands-on experience in languages such as Java, Python, C, and C++.

            I’m focused on enhancing my skills in Data Structures and Algorithms while also diving deeper into Software Engineering, 
            Design and Analysis of Algorithms, and System Design to strengthen my problem-solving abilities and build robust, scalable applications.

            In addition to coding, I’m committed to staying fit and balanced, as I believe a healthy mind fuels creativity and productivity. 
            Whether I’m working on a project, learning a new concept, or simply enjoying some downtime, I strive to make every moment count.

            Let’s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
