import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1300px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#5EE3C0]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1300px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              I'm Justin, looking forward to meeting you! Please take a look
              around to see all of my experience and projects to date.
            </p>
          </div>
          <div>
            <p>
              I have worked for close to a decade as an advertising
              professional. After going through a Software Engineering Boot Camp
              at Fullstack Academy, I'm seeking a new challenge that can combine
              my strong interpersonal skills, effective communication, and a
              customer-focused mindset with my love of programming. I love
              growing relationships in a professional environment and I want to
              work with a team to create great things. My passion for logic and
              problem-solving has lead me to seek out something further in line
              with what excites me. I'm eager to integrate my newfound software
              engineering skills into my work so I can scratch those itches
              while being part of a passionate team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
