import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/about")
      .then(res => res.json())
      .then(setAbout);
  }, []);

  if (!about) return <p className="text-gray-400 text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">{about.title}</h1>
      <p className="text-gray-200">{about.description}</p>
    </div>
  );
}
