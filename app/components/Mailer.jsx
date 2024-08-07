// app/signup/page.js
"use client";

import { useState } from "react";

const Mailer = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Welcome!");
  const [text, setText] = useState("Thank you for signing up!");

  const handleSignup = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, text }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      console.error("Error sending email");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="bg-gray-500">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Mailer;
