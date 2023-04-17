import { useState, useEffect } from "react";

export default function Home() {
  const [mice, setMice] = useState([]);

  const fetchMice = async () => {
    const response = await fetch("/api/mice");
    const data = await response.json();
    setMice(data);
  };

  useEffect(() => {
    fetchMice();
  }, []);

  return (
    <div className="container">
      <div>
        <p className="m-4 text-3xl font-mono">
          API 👉{" "}
          <a href="/api/mice" className="text-sky-500">
            /api/mice
          </a>
        </p>
        <small className="m-4 text-xl text-teal-400 font-mono">
          Data taken from{" "}
          <a
            href="https://sensor.fyi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600"
          >
            sensor.fyi
          </a>
        </small>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Brand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Mouse
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Sensor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Polling Rate (Hz)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Hand
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Weight (g)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      Extra Buttons
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      L (mm)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      W (mm)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                    >
                      H (mm)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {mice.map((item) => (
                    <tr key={item["_id"]}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        {item["Brand"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item["Mouse"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        {item["Sensor"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["Polling Rate (Hz)"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["Hand"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["Weight (g)"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["Extra Buttons"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["L (mm)"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["W (mm)"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item["H (mm)"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
