
import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            All the apps below are made entirely by me as an indie developer.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 justify-center ">
           {projects.map((project) => (
           <div className="basis-1/2 w-64 m-10">
              <img src={project.image} className="rounded"/>
              <h1 className="py-6 text-xl text-white font-bold">{project.title}</h1>
              <h1 className="text-xl ">{project.type}</h1>
           </div>
            
          ))}
        </div>
      </div>
    </section>
  );
}