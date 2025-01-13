import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Science"
            subTitle="MOdevco team (2021 - 2024)"
            result="3.90/4"
            des="The training provided by learning center in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="MOdevco team (2021 - 2024)"
            result="3.90/4"
            des="The training provided by learning center in order to prepare people to work in various sectors of the economy or areas of culture."          />
          <ResumeCard
            title="Back-end Developer"
            subTitle="MOdevco team (2021 - 2024)"
            result="3.90/4"
            des="The training provided by learning center in order to prepare people to work in various sectors of the economy or areas of culture."          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Mobile Developer"
            subTitle="MOdevco team (2021 - 2024)"
            result="3.90/4"
            des="The training provided by learning center in order to prepare people to work in various sectors of the economy or areas of culture."          />
          <ResumeCard
            title="Fullstack Developer"
            subTitle="MOdevco team (2021 - 2024)"
            result="3.90/4"
            des="The training provided by learning center in order to prepare people to work in various sectors of the economy or areas of culture."          />
          <ResumeCard
            title="Cyber Security"
            subTitle="MOdevco team (2021 - 2024)"
            result="3.90/4"
            des="The training provided by learning center in order to prepare people to work in various sectors of the economy or areas of culture."          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
