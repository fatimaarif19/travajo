import React from "react";
import icon from "../assets/bookings.png"; 

const bookings = [
  { name: "Robert Doney" , time: "(21 July 2025 , 1:00 pm)" },
  { name: "Ravi Sharma" , time: "(22 July 2025 , 2:00 pm)" },
  { name: "Jack Aren" , time: "(24 July 2025 , 12:00 pm)" },
  { name: "Nick Wills" , time: "(25 July 2025 , 9:00 pm)" },
  { name: "Kayden Walls"  , time: "(29 July 2025 , 4:00 pm)"},
  { name: "Henry Lee"  , time: "(29 July 2025 , 5:00 pm)"},
];

export default function Bookings() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">My Bookings</h1>

      <div className="max-w-xl mx-auto space-y-6">
        {bookings.map((booking, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-xl p-4"
          >
            <img src={icon} alt="Booking Icon" className="h-10 w-10 mr-4" />
            <p className="text-lg font-medium text-gray-700">{booking.name}</p>
            <p className="text-lg font-small text-gray-400">{booking.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
