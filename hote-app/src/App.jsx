import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Accommodation from './components/Accommodation';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="w-full bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-end">
            <ul className="flex space-x-6">
              <li><Link className="hover:text-gray-300" to="/">Home</Link></li>
              <li><Link className="hover:text-gray-300" to="/accommodation">Accommodation</Link></li>
              <li><Link className="hover:text-gray-300" to="/login">Login</Link></li>
              <li><Link className="hover:text-gray-300" to="/register">Register</Link></li>
              <li><Link className="hover:text-gray-300" to="/about-us">About Us</Link></li>
              <li><Link className="hover:text-gray-300" to="/contact-us">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accommodation" element={<Accommodation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-900 text-white text-center py-4">
          <p>© 2024 Guest Guest. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
