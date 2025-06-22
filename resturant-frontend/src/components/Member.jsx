import React from "react";

const members = [
  { src: "./team_1.png", name: "Chef Arif", role: "Head Chef" },
  { src: "./team_2.png", name: "Chef Priya", role: "Sous Chef" },
  { src: "./team_3.png", name: "Chef Rohan", role: "Pastry Chef" },
  { src: "./team_4.png", name: "Chef Maya", role: "Line Cook" },
];

const Member = () => {
  return (
    <section id="member" className="py-24 bg-gradient-to-br from-green-50 via-orange-50 to-green-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-14 drop-shadow-md">
          Meet Our <span className="text-orange-500">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 transition hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.src}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-green-100 shadow mb-4"
              />
              <span className="text-lg font-semibold text-green-700">{member.name}</span>
              <span className="text-sm text-orange-500 mt-1">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
