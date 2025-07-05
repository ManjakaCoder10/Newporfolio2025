"use client";
import React, { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gray-950 text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-10 text-yellow-400 drop-shadow-md">
          Contactez-moi
        </h2>

        <form className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
