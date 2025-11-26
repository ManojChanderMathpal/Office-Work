import React from 'react'
import Protfoliofirst from '../assets/portfolio-1.jpg'
import Protfoliosecond from '../assets/portfolio-2.jpg'
import Protfoliothird from '../assets/portfolio-4.jpg'
import Button from '../components/Button'

function Projects() {
  const projects = [
    { img: Protfoliofirst, title: 'UI UX Design', desc: 'This is a description' },
    { img: Protfoliosecond, title: 'Web App', desc: 'This is a description' },
    { img: Protfoliothird, title: 'Landing Page', desc: 'This is a description' },
    { img: Protfoliofirst, title: 'Portfolio Site', desc: 'This is a description' },
  ]

  return (
    <div className="flex items-center justify-center bg-black pb-10 min-h-screen">
      <div className="w-[90%] md:w-[80%]">
        <h1 className="flex justify-center mb-8 text-3xl md:text-5xl text-white text-center">
          Here are some of my Projects
        </h1>

        {/* Responsive card container */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 bg-white w-full sm:w-[80%] md:w-[45%] lg:w-[22%] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="rounded-lg w-full h-56 object-cover"
                src={project.img}
                alt={project.title}
              />
              <h1 className="text-2xl font-semibold text-black mt-3">{project.title}</h1>
              <p className="text-lg text-gray-700 mb-3">{project.desc}</p>
              <Button label="Learn More" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
