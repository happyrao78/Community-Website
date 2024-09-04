import React, { useState } from "react";

const leaderboardData = [
  { rank: 1, name: "Participant A", points: 1500, id: "ID123", info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { rank: 2, name: "Participant B", points: 1400, id: "ID124", info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { rank: 3, name: "Participant C", points: 1300, id: "ID125", info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { rank: 4, name: "Participant D", points: 1200, id: "ID126", info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { rank: 5, name: "Participant E", points: 1100, id: "ID127", info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const LeaderBoard = () => {
  const [hoveredUser, setHoveredUser] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Leaderboard
        </h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-teal-500 text-left text-white uppercase font-semibold text-sm">
                  Rank
                </th>
                <th className="py-3 px-6 bg-teal-500 text-left text-white uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="py-3 px-6 bg-teal-500 text-left text-white uppercase font-semibold text-sm">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  onMouseEnter={() => setHoveredUser(user)}
                  onMouseLeave={() => setHoveredUser(null)}
                >
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {user.rank}
                  </td>
                  <td className="py-4 px-6 text-gray-800">{user.name}</td>
                  <td className="py-4 px-6 text-gray-800">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {hoveredUser && (
          <div className="bg-gray-50 border border-gray-300 shadow-md rounded-lg mt-6 p-6 transition-opacity duration-300 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Details</h2>
            <p className="text-gray-700">
              <strong>ID:</strong> {hoveredUser.id}
            </p>
            <p className="text-gray-700">
              <strong>Name:</strong> {hoveredUser.name}
            </p>
            <p className="text-gray-700">
              <strong>Info:</strong> {hoveredUser.info}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoard;
