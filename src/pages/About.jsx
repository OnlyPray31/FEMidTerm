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
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center text-[#e0472e] px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${about.background})`,
      }}
    >
      <div className="p-8 rounded-2xl max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">{about.title}</h1>
        <p className="text-black">{about.description}</p>
      </div>
    </div>
  );
}
