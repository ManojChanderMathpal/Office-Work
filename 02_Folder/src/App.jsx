import React from "react";
import Carditem from "./components/Carditem";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
const card = [
  {
    name: "Senior UI/UX Designer",
    company: "Amazon",
    day: "5 days ago",
    money: "$120k - $140k",
    location: "Seattle, WA",
    categorie: "Part-Time",
    level: "Senior level",
    img: "https://images.unsplash.com/photo-1763182198113-a9a8d0fe3144?q=80&w=1074",
  },
  {
    name: "Frontend Developer",
    company: "Google",
    day: "2 days ago",
    money: "$100k - $130k",
    location: "Mountain View, CA",
    categorie: "Full-Time",
    level: "Mid level",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1074",
  },
  {
    name: "Backend Engineer",
    company: "Microsoft",
    day: "1 day ago",
    money: "$110k - $150k",
    location: "Redmond, WA",
    categorie: "Full-Time",
    level: "Senior level",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1074",
  },
];

const App = () => {
  const [dark, setDark] = useState(true);

  return (
    <div className={(dark && "bg-black text-white")}>
      <div className="flex h-screen flex-row justify-center items-center flex-wrap gap-6 mt-5.5">
        {card.map(function (jobs, index) {
          return (
            <div key={index}>
              <Carditem
                name={jobs.name}
                img={jobs.img}
                money={jobs.money}
                location={jobs.location}
                categorie={jobs.categorie}
                level={jobs.level}
                company={jobs.company}
                day={jobs.day}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className={`p-3 rounded text-white ${
            dark === "Yellow" ? "bg-red-500 " : "bg-yellow-500"
          }`}
          onClick={() => setDark((prev) => !prev)}
        >
          {dark ? "Yellow" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default App;
