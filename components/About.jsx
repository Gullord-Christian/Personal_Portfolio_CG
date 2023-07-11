import React from "react";

import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="w-[75%] h-[65%] lg:w-[65%] m-auto shadow-xl shadow-gray-400 rounded-xl items-center hover:scale-105 align-center ease-in duration-300">
        <img
          className="rounded-xl w-full md:mt-0 mt-6"
          src={"/static/images/unsplash-tech-2.jpg"}
          alt="laptop"
        />
      </div>
      <div
        id="about"
        className="w-full h-[90vh] md:h-screen p-2 flex items-center py-16 layer1"
      >
        <div className="m-auto max-w-[80%] ">
          <div className="col-span-2">
            <h2 className="uppercase text-xl tracking-widest text-[#008B8B] py-4">
              About Me
            </h2>
            <p className="py-2 text-gray-600">
              Over the past 10 years, I've had the pleasure of working in the
              vibrant hospitality industry. From my roots in the wine and
              restaurant scene of Napa Valley to managing luxury resorts in
              sunny San Diego, it's been an incredible journey.
            </p>{" "}
            <p className="py-2 text-gray-600">
              I&apos;ve always had an interest in computers, machines, video
              games, and just a natural curiosity about all things&apos; related
              to technology. After dipping my toes in a few introductory
              courses, I knew I had found my true passion: software development.
              It's the perfect blend of my interests and skills, and I can't
              wait to dive deeper into this field and build a career out of it.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer md:block hidden">
              <Link href="/#projects">
                Check out some of my latest projects
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
