import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="bg-[#6F4E37] shadow-sm p-4 flex justify-between items-center border-b border-gray-100">
      <Link to="/" className="text-xl font-bold text-white">
        MinimalistBlog
      </Link>
      <div className="space-x-6 font-medium text-white">
        <Link to="/" className="hover:text-[#F8F4E9] transition">Home</Link>
        <Link to="/create" className="hover:text-[#F8F4E9] transition">Create Post</Link>
        <Link to="/bookmarks" className="hover:text-[#F8F4E9]  transition">Bookmarks</Link>
      </div>
    </nav>
  );
}
export default Navbar;