import React from "react";
import logo from "./logo.png"

export default function Hero(){
    return(
        <div className="text-center">
          
          <img src={logo} className="w-64 mx-auto"/>
             <h1 className="p-6 font-sans text-4xl font-bold text-white">Welcome, I'm Francesco</h1>
             <h1 className="font-sans text-2xl">iOS and Web developer</h1>

             <div className="p-6 flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See my works
              </a>
            </div>
        </div>

    );
}