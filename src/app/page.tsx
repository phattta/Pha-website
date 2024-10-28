// src/app/page.tsx
"use client";

import { useState } from 'react';
import Home1 from './Home/Home1';

const Home = () => {
  const [isLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <Home1 />
        </div>
      ) : (
        <div>
          <p>Please log in to access this content.</p>
        </div>
      )}
    </>
  );
};

export default Home;
