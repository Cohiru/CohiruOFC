"use client";

import { FormEvent, useState } from "react";

export default function Kontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("=== Data Form Kontak ===");
    console.log("Nama :", nama);
    console.log("Email :", email);
    console.log("Pesan :", pesan);

    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black text-white p-8 rounded-2xl border-2 border-orange-400 shadow-lg shadow-orange-500/30"
      >
        <h1 className="text-3xl font-bold text-orange-400 mb-6 text-center">
          Contact Me
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Nama</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama anda"
            className="w-full px-4 py-2 rounded-lg bg-black border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email anda"
            className="w-full px-4 py-2 rounded-lg bg-black border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Pesan</label>
          <textarea
            rows={5}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis pesan anda"
            className="w-full px-4 py-2 rounded-lg bg-black border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded-lg transition duration-300 shadow-lg shadow-orange-500/40"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
