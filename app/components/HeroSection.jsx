import React from "react";

const HeroSection = ({ dark }) => {
  return (
    <ul
      className={`first-letter:text-2xl first-letter:text-red-600 text-xl  min-p-2  pb-2 drop-shadow-2xl hover:drop-shadow-none`}
    >
      <li className=" hover:tracking-wide">👋 Hi, I’m dean, </li>
      <li>👀 I’m interested in web and android development,</li>
      <li>
        🌱 I’m currently work on javascript,React js,Next js for web developer
        and,
      </li>

      <li>React-native for android projects,</li>
      <li>
        🌱 also i'm learning python and django for backend and desktop
        application
      </li>
      <li>
        📫 You can contact with me by my gmail:
        <a
          className="text-my-orange text-2xl mx-2 hover:tracking-wide"
          href="mailto:deanj77@gmail.com"
        >
          dean's gmail
        </a>
      </li>
      <li>🎭or fill below form and i contact with you as soon as it posible</li>
    </ul>
  );
};

export default HeroSection;
