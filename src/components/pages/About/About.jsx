import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        // subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
        subtitle="A passionate BCA student and aspiring full-stack developer dedicated to creating modern and user-friendly web applications."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
          Hello! I'm Umair, a BCA student with a strong interest in web
          development and modern technologies. I enjoy building responsive and
          user-friendly web applications using React.js, Tailwind CSS, PHP, and
          MySQL.
        </p>

        <br />

        <p>
          During my learning journey, I have developed projects such as a
          Feedback Management System and a Petrol Pump Management System, which
          helped me strengthen my skills in frontend development, backend
          programming, and database management. I am always eager to learn new
          technologies and improve my problem-solving abilities.
        </p>

        {/* Social Links */}
        {/* <div className="flex space-x-4 mt-10">
          <MdFacebook className="social-btn" />
          <AiFillInstagram className="social-btn" />
          <AiFillGithub className="social-btn" />
          <AiFillLinkedin className="social-btn" />
        </div> */}
        <div className="flex space-x-4 mt-10">
          <a
            href="YOUR_FACEBOOK_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook className="social-btn" />
          </a>

          <a
            href="YOUR_INSTAGRAM_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="social-btn" />
          </a>

          <a
            href="https://github.com/Umair9305"
            target="https://github.com/Umair9305"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="social-btn" />
          </a>

          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="social-btn" />
          </a>
        </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="#" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;