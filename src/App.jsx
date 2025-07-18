import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import WorkerDB from "./pages/WorkerDB.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/workerdb" element={<WorkerDB />} />
      </Routes>
  );
}

export default App;
