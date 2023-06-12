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
              After working for nearly a decade as an advertising professional,
              I'm seeking a new challenge in programming. My passion for logic
              and problem-solving has lead me to seek out something further in
              line with what excites me. I love growing relationships in a
              professional environment and I want to work with a team to create
              great things. I love the challenge of learning programming
              languages as well as solving an interesting logic puzzle. While I
              feel as though the advertising field could never quite fulfill me
              in that regard, I'm eager to get my software engineering career
              under way so I can scratch those itches while being part of a
              team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
