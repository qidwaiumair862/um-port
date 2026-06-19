import React from "react";
import ServicesBox from "./ServicesBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";

const Services = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="Services"
        // subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
        subtitle="Transforming ideas into responsive, user-friendly, and efficient web applications."
      />

      {/* Services Card  */}
      <div>
        <ServicesBox />
      </div>
    </div>
  );
};

export default Services;