

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
        return b.size - a.size; 
      } else {
        return a.size - b.size; 
      }
    });

    setInstalledApps(sortedApps);
  };


  return (
 <div className="w-11/12 sm:w-10/12 mx-auto mt-10">
  <h1 className="text-2xl sm:text-3xl font-bold mb-5">Installed Apps</h1>

  {installedApps.length === 0 && (
    <p className="text-gray-600 text-base sm:text-lg">No apps installed yet.</p>
  )}


  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center my-4 gap-4">
    <h1 className="text-xl sm:text-2xl font-semibold">{installedApps.length} - Apps Found</h1>

    <select
      className="border border-amber-300 p-2 rounded-sm text-base sm:text-xl font-semibold w-full sm:w-auto"
      value={sortOrder}
      onChange={handleSort}
    >
      <option disabled value="">Sort by Size</option>
      <option value="Low-High">Low-High</option>
      <option value="High-Low">High-Low</option>
    </select>
  </div>


  <ul className="list-none space-y-3">
    {installedApps.map((app, index) => (
      <li
        key={index}
        className="p-3 border rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
      >
        <div className="flex items-center gap-3">
          <img src={app.image} alt={app.title} className="w-12 h-12 sm:w-16 sm:h-16 rounded" />
          <div>
            <p className="font-semibold text-base sm:text-lg">{app.title}</p>
            <p className="text-sm sm:text-base text-gray-600">
              {app.companyName} - {app.size}MB
            </p>
          </div>
        </div>

        <button
          onClick={() => handleUninstall(index)}
          className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 self-start sm:self-auto"
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
