import { useEffect, useState } from "react";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/contact")
      .then(res => res.json())
      .then(setContact);
  }, []);

  if (!contact) return <p className="text-gray-400 text-center mt-10">Loading contact info...</p>;

  return (
    <div className="max-w-md mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold mb-4 text-[#e0472e]">Contact Me</h1>
      <p className="text-gray-700 mb-2">📧 {contact.email}</p>
      <p className="text-gray-700 mb-2">📷 {contact.instagram}</p>
      <p className="text-gray-700">📍 {contact.location}</p>
    </div>
  );
}
