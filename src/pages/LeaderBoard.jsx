import React from "react";

const leaderboardData = [
  { rank: 1, name: "Participant A", points: 1500 },
  { rank: 2, name: "Participant B", points: 1400 },
  { rank: 3, name: "Participant C", points: 1300 },
  { rank: 4, name: "Participant D", points: 1200 },
  { rank: 5, name: "Participant E", points: 1100 },
];

const LeaderBoard = () => {
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
                  className="border-b border-gray-200 hover:bg-gray-50"
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
      </div>
    </div>
  );
};

export default LeaderBoard;

