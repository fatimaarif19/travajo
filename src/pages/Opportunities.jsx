import React from "react";
import bg1 from "../assets/bg1.png";


const opportunityList = [
  {
    title: "Remote Diversity Hiring",
    description: "Jobs from companies prioritizing remote, inclusive hiring practices for underrepresented communities.",
  },
  {
    title: "NGO & Startup Internships",
    description: "Internship listings for rural and underserved students from NGOs and early-stage startups.",
  },
  {
    title: "Low-Data Friendly Jobs",
    description: "Work options like stitching, BPO, or teaching that require minimal internet usage.",
  },
  {
    title: "Government Reservation Jobs",
    description: "Centrally listed job openings with category-based reservations and benefits.",
  },
  {
    title: "Skill-Based Work Platforms",
    description: "Platforms connecting skilled workers with job providers (electricians, tailors, carpenters, etc).",
  },
  {
    title: "Volunteer & Paid Community Work",
    description: "Opportunities for community upliftment that also offer stipends or pay.",
  },
    {
    title: "Remote Diversity Hiring",
    description: "Jobs from companies prioritizing remote, inclusive hiring practices for underrepresented communities.",
  },
  {
    title: "NGO & Startup Internships",
    description: "Internship listings for rural and underserved students from NGOs and early-stage startups.",
  },
  {
    title: "Low-Data Friendly Jobs",
    description: "Work options like stitching, BPO, or teaching that require minimal internet usage.",
  },
];



export default function Worker() {
  return (
    <div
      className="h-full w-full bg-cover bg-center text-white px-8 py-16"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div >
        <h1 className="text-2xl  mb-0 mt-0 text-center font-light italic">Explore Opportunities with</h1>
        <p className="text-5xl font-bold text-center ">TRAVAJO</p>
      </div>
      <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-3 max-w-6xl mx-auto ">
      {opportunityList.map((item, index) => (
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