import React from 'react';

const skills = [
  { name: "React", percent: "90%", color: "bg-red-500" },
  { name: "Tailwind CSS", percent: "85%", color: "bg-green-500" },
  { name: "JavaScript", percent: "80%", color: "bg-yellow-400" },
];

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-10 py-16">
      {/* Intro Section */}
      <h1 className="text-4xl font-bold mb-6 text-center max-w-[800px]">
        #1 Digital Solution with 10 Years of Experience
      </h1>
      <p className="max-w-[800px] text-center text-gray-300 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi, expedita. Esse repellat, quis veritatis, sint dolorem,
        voluptas quae impedit dignissimos dolore sed nihil.
      </p>

      {/* Education Section */}
      <div className="mt-3.5 mb-10 text-center">
        <h1 className="mb-5 text-3xl font-bold">My Education</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <section className="bg-white text-black p-4 rounded-2xl w-60 shadow-md">
            <h2 className="text-2xl font-semibold">BCA</h2>
            <p>College Name</p>
          </section>
          <section className="bg-amber-300 text-black p-4 rounded-2xl w-60 shadow-md">
            <h2 className="text-2xl font-semibold">MCA</h2>
            <p>College Name</p>
          </section>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full max-w-[800px]">
        <h1 className="text-3xl font-bold mb-6 text-center">My Skills</h1>

        {skills.map((skill, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.percent}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className={`${skill.color} h-3 rounded-full transition-all duration-700`}
                style={{ width: skill.percent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
