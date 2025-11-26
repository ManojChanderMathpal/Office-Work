import React from 'react';
import profileImg from '../assets/dark.jpg';
import About from './About';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* 🏠 Home Section */}
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 mx-auto min-h-screen gap-10"
      >
        {/* 🧠 Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Hey, I'm Guest 👋</h1>
          <h3 className="text-2xl md:text-3xl text-blue-400 mb-4">Front-End Developer</h3>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            I love crafting modern and responsive web experiences using React and TailwindCSS.
          </p>
          <div className="space-x-0 space-y-3 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all"
            >
              My Work
            </a>
            <a
              href="#about"
              className="bg-white text-black px-6 py-3 rounded-2xl hover:bg-gray-200 transition-all"
            >
              About Me
            </a>
          </div>
        </div>

        {/* 🖼️ Profile Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-[90%] max-w-[400px] md:max-w-[500px] lg:max-w-[600px] rounded-xl object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* 👤 About Section */}
      <section id="about">
        <About />
      </section>

      {/* 💻 Projects Section */}
      <section id="projects">
        <Projects />
      </section>
            {/* 💻 Projects Section */}
      <section id="service">
        <Services />
      </section>
    </div>
  );
};

export default Home;
