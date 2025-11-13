import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/profile")
      .then((res) => res.json())
      .then(setProfile);
  }, []);

  if (!profile)
    return (
      <p className="text-gray-400 text-center mt-10">Loading profile...</p>
    );

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-gray-800 mt-10">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <p className="uppercase text-sm tracking-widest font-medium mb-2">
          {profile.role}
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#e0472e] mb-4">
          {profile.name}
        </h1>
        <p className="uppercase text-xs tracking-wider text-gray-700">
          {profile.bio}
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src="/images/profil.png"
          alt={profile.name}
          className="w-64 md:w-96 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
