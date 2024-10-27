"use client";

import React, { useState } from "react";
import Login from "./login/Login";
import Section1 from "./section/Section1";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";
import Section4 from "./section/Section4";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}
