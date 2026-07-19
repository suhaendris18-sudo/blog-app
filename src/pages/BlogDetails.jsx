import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading details...</div>;
  if (!post) return <div className="p-10 text-center">Post not found.</div>;
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white my-10 border rounded-xl shadow-sm">
      <button onClick={() => navigate('/')} className="text-sm text-blue-600 mb-4 block">
        ← Back to Home
      </button>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
}
export default BlogDetails;