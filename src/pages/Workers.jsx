import React from "react";
import bg1 from "../assets/bg1.png";
import person from '../assets/person.png';


const workers = [
  { icon: person, name: "Aisha Khan", age: 28, work: "Tailor" },
  { icon: person, name: "Rahul Verma", age: 35, work: "Electrician" },
  { icon: person, name: "Suman Devi", age: 40, work: "Cook" },
  { icon: person, name: "Imran Sheikh", age: 30, work: "Plumber" },
  { icon: person, name: "Lakshmi R", age: 26, work: "Babysitter" },
  { icon: person, name: "Pooja Yadav", age: 29, work: "House Cleaner" },
  { icon: person, name: "Ramesh Singh", age: 32, work: "Driver" },
  { icon: person, name: "Kiran Bala", age: 27, work: "Tutor" },
  { icon: person, name: "Arun Das", age: 38, work: "Security Guard" },
];


export default function Worker() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center text-white px-8 py-16"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="max-w-1xl mx-auto">
        <h1 className="text-2xl  text-center font-light italic">Find your Worker at</h1>
        <p className="text-5xl font-bold text-center ">TRAVAJO</p>
      </div>
      <div className="mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-3 max-w-6xl mx-auto ">
      {workers.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-3 bg-white/30 backdrop-blur rounded-xl shadow-md"
        >
          <img src={item.icon} className="h-12 w-12 mb-2" />
          <p className="text-black text-sm font-bold text-xl">{item.name}</p>
          <p className="text-black text-sm font-small text-3xl">{item.age}</p>
          <p className="text-black text-sm font-small text-3xl">{item.work}</p>
        </div>
      ))}
      <div className="mt-6"></div>
    </div>
  </div>
  </div>
  );
}