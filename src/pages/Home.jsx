import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { useAtom } from 'jotai';
import { postsAtom } from '../atoms/bookmarkAtoms';
function Home() {
  const navigate = useNavigate();
  const [posts,setPosts] = useAtom(postsAtom);
  const [loading, setLoading] = useState(posts.length === 0);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (posts.length === 0) {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts from API");
        return res.json();
      })
      .then((data) => {
        setPosts(data.posts); 
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    }else{
      setLoading(false);
    }
  }, [posts.length, setPosts]);
  return (
    <div className="min-h-screen bg-[#F8F4E9] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-green-200 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-5xl font-extrabold text-red-900 tracking-tight">
              Welcome to Blog
            </h1>
      
          </div>
          <button 
            onClick={() => navigate('/create')}
            className="bg-[#6F4E37] hover:bg-[#E0E0E0] text-white font-medium px-5 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            + Create New Post
          </button>
        </div>
        {loading && (
          <div className="text-center py-20">
            <div className="text-lg font-medium text-gray-600 animate-pulse">Loading blog posts...</div>
          </div>
        )}
        {error && (
          <div className="bg-[#F8F4E9] border border-red-200 rounded-lg p-6 text-center max-w-2xl mx-auto">
            <h3 className="text-red-800 font-bold text-lg mb-2">Error Occurred</h3>
            <p className="text-red-600 text-sm mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;

