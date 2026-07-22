import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { bookmarksAtom } from '../atoms/bookmarkAtoms';
function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const toggleBookmark = () => {
    const isBookmarked = bookmarks.some((item) => item.id === post.id);
    if (isBookmarked) {
      setBookmarks(bookmarks.filter((item) => item.id !== post.id));
    } else {
      setBookmarks([...bookmarks, post]);
    }
  };
    useEffect(() => {
  // ፖስቱን መሳብ
  fetch(`https://dummyjson.com/posts/${id}`)
    .then((res) => res.json())
    .then((data) => setPost(data));

  // ኮሜ`ንቶቹን መሳብ (ከፒዲኤፉ ኤንድፖይንት መሠረት)
  fetch(`https://dummyjson.com/comments/post/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setComments(data.comments || []);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [id]);

  if (loading) return <div className="p-10 text-center">Loading details...</div>;
  if (!post) return <div className="p-10 text-center">Post not found.</div>;
  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#F8F4E9] my-10 border rounded-xl shadow-sm">
      <button onClick={() => navigate('/')} className="text-sm text-[#6F4E37] mb-4 block">
        ← Back to Home
      </button>




      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
      {post.tags && (
  <div className="flex gap-2 my-3 flex-wrap">
    {post.tags.map((tag, index) => (
      <span key={index} className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
        #{tag}
      </span>
    ))}
  </div>
)}







      <button 
    onClick={toggleBookmark}
    className={`mt-4 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
      bookmarks.some((item) => item.id === post.id)
        ? 'bg-[#C9A227]text-[#F8F4E9] hover:bg-[#6F4E37]'
        : 'bg-[#C9A227]text-[#F8F4E9] hover:bg-[#6F4E37] hover:text-white'
    }`}
  >
    {bookmarks.some((item) => item.id === post.id) ? ' Bookmarked' : '🔖 Bookmark Post'}
  </button>
<div className="border-t border-gray-300 pt-4 mt-6">
  <h3 className="text-lg font-bold mb-3">Comments ({comments.length})</h3>
  {comments.length === 0 ? (
    <p className="text-xs text-gray-500">No comments yet.</p>
  ) : (






    <div className="space-y-3">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white p-3 rounded-lg border text-sm">
          <p className="font-semibold text-xs text-orange-600 mb-1">
            @{comment.user?.username || 'User'}
          </p>
          <p className="text-gray-700">{comment.body}</p>
        </div>
      ))}
    </div>






  )}
</div>
    </div>
  );
}
export default BlogDetails;