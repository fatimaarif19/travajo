import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { auth } from "../firebase";

export default function Workers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const data = querySnapshot.docs
        .map(doc => doc.data())
        .filter(user => user.role === "worker");
      setWorkers(data);
    };
    fetchWorkers();
  }, []);

  const bookWorker = async (workerUid) => {
    if (!auth.currentUser) return alert("Login first to book");

    await addDoc(collection(db, "bookings"), {
      bookedBy: auth.currentUser.uid,
      workerId: workerUid
    });

    alert("Worker booked successfully!");
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workers.map((worker, idx) => (
        <div key={idx} className="bg-white shadow rounded p-4 flex flex-col items-center">
          <img src={worker.photo} alt="worker" className="w-24 h-24 object-cover rounded-full mb-3" />
          <h3 className="text-lg font-semibold">{worker.name}</h3>
          <p>Age: {worker.age}</p>
          <p className="italic">{worker.work}</p>
          <p className="text-sm mt-1 text-gray-600">"{worker.about}"</p>
          <button
            onClick={() => bookWorker(worker.uid)}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Book
          </button>
        </div>
      ))}
    </div>
  );
}
