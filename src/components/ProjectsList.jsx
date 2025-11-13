import { useEffect, useState } from "react";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-6">
      {projects.map((p) => (
        <div key={p.id} className="p-5 bg-white/10 rounded-xl shadow hover:scale-105 transition">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
          <p className="text-gray-200">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
