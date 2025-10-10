
import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);


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

  return (
    <div className="w-10/12 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Installed Apps</h1>
      {installedApps.length === 0 && (
        <p className="text-gray-600">No apps installed yet.</p>
      )}
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
