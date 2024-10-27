"use client";

import React from "react";
import Image from 'next/image';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="camera-icon">
          <Image
            src="/login1.png"
            alt="Camera"
            width={60}
            height={60}
            className="circle-image" 
          />
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
            </label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
            </label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <style jsx>{`
        .login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          background-image: url('/login-2.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          animation: moveBackground 20s infinite linear;
        }

        @keyframes moveBackground {
          0% {
            background-position: center top;
          }
          50% {
            background-position: center bottom;
          }
          100% {
            background-position: center top;
          }
        }

        .login-box {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 40px;
          width: 350px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          text-align: center;
        }

        .camera-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          overflow: hidden;
          border-radius: 50%; /* ทำให้รูปภาพเป็นวงกลม */
          background-color: #f0f0f0;
        }

        .circle-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .input-group {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 8px;
          background: transparent;
        }

        .input-group input {
          background: transparent;
          border: none;
          width: 100%;
          padding: 10px 0;
          outline: none;
          font-size: 16px;
          letter-spacing: 0.5px;
          color: #fff;
          box-sizing: border-box;
        }

        .input-group input:focus {
          background-color: transparent;
          box-shadow: none;
          border: none;
        }

        .input-group input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .remember-forgot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .remember-forgot label {
          font-size: 14px;
          cursor: pointer;
        }

        .remember-forgot a {
          color: #81d4fa;
          font-size: 14px;
          text-decoration: none;
        }

        .remember-forgot a:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        .login-button {
          background-color: #1e88e5;
          border: none;
          color: white;
          padding: 15px 30px;
          font-size: 16px;
          border-radius: 25px;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        .login-button:hover {
          background-color: #1565c0;
        }

        @media (max-width: 480px) {
          .login-box {
            width: 90%;
            padding: 30px;
          }

          .camera-icon img {
            width: 50px;
          }

          .login-button {
            padding: 12px 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
