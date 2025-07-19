import React from "react";
import bg1 from "../assets/bg1.png";

const upskillTopics = [
  { title: "Interview Preparation", description: "Ace interviews with expert-backed tips." },
  { title: "Online Course Platforms", description: "Where to learn—Coursera, Udemy, and more." },
  { title: "Career Roadmaps", description: "Guides for different tech and non-tech roles." },
  { title: "Build Your Resume", description: "Tips and templates to make your resume stand out." },
  { title: "Top Skills in 2025", description: "Explore what skills will be in high demand." },
  { title: "Soft Skills to Know", description: "Communication, teamwork, and more." },
  { title: "Interview Preparation", description: "Ace interviews with expert-backed tips." },
  { title: "Online Course Platforms", description: "Where to learn—Coursera, Udemy, and more." },
  { title: "Career Roadmaps", description: "Guides for different tech and non-tech roles." }
];


export default function Worker() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center text-white px-8 py-16"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div >
        <h1 className="text-2xl  mb-0 mt-0 text-center font-light italic">Upskilling with</h1>
        <p className="text-5xl font-bold text-center ">TRAVAJO</p>
      </div>
      <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-3 max-w-6xl mx-auto ">
      {upskillTopics.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-3 bg-black/90 backdrop-blur rounded-xl shadow-md"
        >
          <p className="text-white text-sm font-bold text-xl">{item.title}</p>
          <p className="text-white text-sm font-small text-3xl">{item.description}</p>
        </div>
      ))}

    </div>
  </div>
  </div>
  );
}