import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-9xl font-bold">TRABAJO</h1>
      <p className="text-4xl mt-2 italic">- bridging the gap -</p>
      <div className="mt-10 flex gap-6"></div> 
      <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-300 font-medium">
      Looking for Work?
      </button>
      <div className="mt-3 flex gap-2"></div>     
      <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition duration-300 font-medium">
      Looking for Workers?
      </button>
    </div>
  );
}
