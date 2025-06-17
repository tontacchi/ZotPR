import React from 'react';
import { FaHome } from 'react-icons/fa';

import '../styles/navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="bg-ZotDarkBlue/50 w-full">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* Left: Home button */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white hover:text-gray-300 flex items-center space-x-2">
              <FaHome className="text-xl" />
              <span className="hidden sm:inline">Home</span>
            </a>
          </div>

          {/* Center: Nav links */}
          <ul className="flex space-x-6 text-white text-lg">
            <li><a href="/Upper" className="hover:border-b-2 hover:border-white pb-1">Upper</a></li>
            <li><a href="/Lower" className="hover:border-b-2 hover:border-white pb-1">Lower</a></li>
            <li><a href="/Run-Times" className="hover:border-b-2 hover:border-white pb-1">Run Times</a></li>
            <li><a href="/Reps" className="hover:border-b-2 hover:border-white pb-1">Reps</a></li>
          </ul>

          {/* Right: Login button */}
          <div>
            <a
              href="/login"
              className="text-white px-4 py-1.5 rounded border border-white hover:bg-white hover:text-ZotDarkGray transition"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;