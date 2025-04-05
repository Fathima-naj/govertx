import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    localStorage.setItem("username", username);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-10 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-white text-black w-full py-2 rounded font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
