import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import javaimage from "../assets/java.png";
import python from "../assets/python.png";
import cplusplus from "../assets/cplusplus.png";
import github from "../assets/github.png";
import photoshop from "../assets/photoshop.png";
import premiere from "../assets/premiere.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: javaimage,
      title: "Java",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: photoshop,
      title: " Adobe Photoshop",
      style: "shadow-sky-400",
    },


    {
      id: 6,
      src: cplusplus,
      title: "C++",
      style: "shadow-blue-300",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },

    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },

    {
      id: 9,
      src: premiere,
      title: "Adobe Premiere Pro",
      style: "shadow-blue-400"
    },
  ];

  return (
    <div
      name="skills"
      className="  bg-white w-full p-10 pb-16"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col text-black justify-center w-full h-full">
        <div>
          <p className="text-2xl md:text-4xl  font-bold p-2 text-center pb-4">
            Skills
          </p>

        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-14 text-center py-8 px-3 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-xl hover:scale-110 font-bold text-black bg-white border-2 border-black cursor-pointer duration-300 py-6 my-auto rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 m-auto bg-white" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
