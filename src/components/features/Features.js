import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign,  } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { TbApi } from "react-icons/tb";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="Building responsive and visually appealing user interfaces using modern technologies like React.js, Tailwind CSS, and more."
        />
        <Card
          title="Backend Development"
          des="Creating robust and scalable backend systems with Node.js, Express.js, and integrating with databases like MongoDB."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Mobile App Development"
          des="Designing and developing cross-platform mobile applications with frameworks like React Native and Flutter."
          icon={<FaMobile />}
        />
        <Card
          title="UI/UX Design"
          des="Crafting intuitive and user-friendly interfaces using tools like Figma to enhance user experience."
          icon={<SiAntdesign />}
        />
        <Card
          title="Website Hosting"
          des="Deploying and managing websites on platforms like AWS, Vercel, and Netlify for optimal performance and reliability."
          icon={<FaGlobe />}
        />
        <Card
          title="API Integration"
          des="Connecting applications with third-party services and custom APIs to streamline functionality and data exchange."
          icon={<TbApi />}
        />
      </div>
    </section>
  );
}

export default Features;
