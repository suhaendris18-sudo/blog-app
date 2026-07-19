import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import Navbar from './components/Navbar.jsx';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-green-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
