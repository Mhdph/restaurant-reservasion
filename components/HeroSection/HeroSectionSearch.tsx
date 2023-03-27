import React from "react";

function HeroSectionSearch() {
  return (
    <div className="py-2 flex flex-col items-start flex-1 gap-6 justify-center">
      <p className=" text-[2.5rem] md:text-[1.5rem] lg:text-[3.6rem] tracking tracking-wide text-headingColor font-bold">
        Find Best Restaurant in
        <span className="text-orange-500 text-[2.8rem] md:text-[1.8rem] lg:text-[3.6rem]">
          Your City
        </span>
      </p>
      <p className="text-base text-textColor text-center md:text-left lg:w-[80%] md:text-[1rem]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus odit
        distinctio quidem iste saepe eveniet consectetur debitis architecto
        possimus quibusdam ea autem unde ipsa exercitationem, vel beatae
      </p>
      <div className="flex w-full gap-2">
        <input
          type="text"
          id="large-input"
          className="block w-96 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="button"
          className=" bg-gradient-to-br rounded-lg hover:shadow-lg  transition-all ease-in-out duration-100 w-full md:w-auto px-4 py-2 from-orange-400 to-orange-500"
        >
          Search Restaurant
        </button>
      </div>
    </div>
  );
}

export default HeroSectionSearch;
