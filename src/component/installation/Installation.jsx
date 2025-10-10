// src/component/installation/Installation.jsx

import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
   const [sortOrder, setSortOrder] = useState("");


  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

 
  const handleUninstall = (index) => {
    const newApps = [...installedApps];
    newApps.splice(index, 1); 
    setInstalledApps(newApps); 
    localStorage.setItem("installedApps", JSON.stringify(newApps));
  };
  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedApps = [...installedApps].sort((a, b) => {
      if (order === "High-Low") {
        return b.size - a.size; // Highest first
      } else {
        return a.size - b.size; // Lowest first
      }
    });

    setInstalledApps(sortedApps);
  };


  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Installed Apps</h1>
      
      {installedApps.length === 0 && (
        <p className="text-gray-600">No apps installed yet.</p>
      )}

      
      <div className="flex justify-between my-4 items-center  mx-auto" >
        <h1 className="text-2xl font font-semibold ">{installedApps.length} - Apps Found</h1>
      <select className="border border-amber-300 p-2 rounded-sm text-xl font-semibold" value={sortOrder} onChange={handleSort}>
  <option disabled value="">Sort by Size</option>
  <option value="Low-High">Low-High</option>
  <option value="High-Low">High-Low</option>
</select>
     

      </div>
      <ul className="list-disc pl-5">
        {installedApps.map((app, index) => (
          <li
            key={index}
            className="mb-3 p-3 border rounded flex items-center justify-between"
          >
            <div className="flex items-center">
              <img src={app.image} alt={app.title} className="w-12 h-12 mr-3" />
              <div>
                <p className="font-semibold">{app.title}</p>
                <p className="text-sm text-gray-600">
                  {app.companyName} - {app.size}MB
                </p>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(index)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Uninstall
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Installation;
