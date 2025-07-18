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
    </div>
  );
}
