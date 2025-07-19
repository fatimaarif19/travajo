import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import WorkerDB from "./pages/WorkerDB.jsx";
import Upskill from './pages/Upskill.jsx';
import Opportunities from './pages/Opportunities.jsx';
import Booking from './pages/Booking.jsx';
import Workers from './pages/Workers.jsx';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/workerdb" element={<WorkerDB />} />
        <Route path="/nonworker" element={<Workers />} />
        <Route path="/upskill" element={<Upskill />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/opportunities" element={<Opportunities />} />
      </Routes>
  );
}

export default App;
