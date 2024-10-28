"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    router.push('/products'); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div> 
      <div style={styles.loginContainer}>
        <div style={styles.avatar}>
          <i className="fas fa-user"></i> 
        </div>
        <div style={styles.loginBox}>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputContainer}>
              <i className="fas fa-envelope" style={styles.icon}></i>
              <input type="email" placeholder="Email ID" required style={styles.input} />
            </div>
            <div style={styles.inputContainer}>
              <i className="fas fa-lock" style={styles.icon}></i>
              <input type="password" placeholder="Password" required style={styles.input} />
            </div>
            <div style={styles.options}>
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" style={styles.link}>Forgot Password?</a>
            </div>
            <button type="submit" style={styles.loginButton}>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: 'url("/login-1.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
    animation: 'backgroundMove 30s infinite linear', 
  },
  overlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loginContainer: {
    position: 'relative' as const,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '40px 20px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2em',
    color: 'white',
    marginBottom: '-30px',
  },
  loginBox: {
    textAlign: 'center' as const,
    width: '100%',
    maxWidth: '300px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px',
    borderRadius: '5px',
  },
  icon: {
    marginRight: '10px',
    color: '#333',
  },
  input: {
    border: 'none',
    outline: 'none',
    background: 'none',
    flex: 1,
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9em',
    color: '#fff',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  loginButton: {
    backgroundColor: '#556b2f',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    marginTop: '20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
  },
};

// Animation keyframes (เพิ่มใน global CSS)
const globalStyles = `
@keyframes backgroundMove {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}
`;

// แทรก keyframes ลงใน document style
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = globalStyles;
  document.head.appendChild(styleSheet);
}
