import React from "react";
import bg1 from "../assets/bg1.png";
import bookingIcon from '../assets/booking.png';
import upskillIcon from '../assets/upskill.png';
import opportunitiesIcon from '../assets/opportunities.png';

const features = [
  { icon: bookingIcon, label: "Get Job Bookings", description: "Employers and normal people can easily make bookings to hire you for work." },
  { icon: opportunitiesIcon, label: "Opportunities", description: "International and national schemes, programs, remote opportunities for internships and work are laid out and explained for you so you don’t miss any chances." },
  { icon: upskillIcon, label: "Upskilling", description: "You are provided tutorials and lessons and guidance into the world of employment to aid you in your journey of achieving your potential." },
]

export default function Worker() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center text-white px-8 py-16"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-1xl mx-auto">
        <h1 className="text-2xl  mb-2 mt-8 text-center font-light italic">Rise with</h1>
        <p className="text-5xl font-bold text-center ">TRAVAJO</p>
      </div>
      <div className="mt-18">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-3 max-w-6xl mx-auto ">
      {features.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-3 bg-white/30 backdrop-blur rounded-xl shadow-md"
        >
          <img src={item.icon} className="h-12 w-12 mb-4" />
          <p className="text-black text-sm font-bold text-xl">{item.label}</p>
          <p className="text-black text-sm font-small text-3xl">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}