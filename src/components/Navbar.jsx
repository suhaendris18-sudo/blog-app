import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center border-b border-gray-100">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MinimalistBlog
      </Link>
      <div className="space-x-6 font-medium text-gray-600">
        <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        <Link to="/create" className="hover:text-blue-600 transition">Create Post</Link>
        <Link to="/bookmarks" className="hover:text-blue-600 transition">Bookmarks</Link>
      </div>
    </nav>
  );
}
export default Navbar;