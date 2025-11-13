import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then(res => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <p className="text-gray-400 text-center mt-10">Loading profile...</p>;

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
      <p className="text-xl text-indigo-300">{profile.role}</p>
      <p className="max-w-md mx-auto mt-3 text-gray-200">{profile.bio}</p>
    </div>
  );
}
