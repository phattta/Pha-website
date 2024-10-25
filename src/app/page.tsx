import React from 'react';
import Home1 from './home/Home1';
import Home2 from './home/Home2';
import Home3 from './home/Home3';
import Home4 from './home/Home4';
import Login from './login/Login';

export default function HomePage() { 
  return (
    <div>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Login />  
    </div>
  );
}
