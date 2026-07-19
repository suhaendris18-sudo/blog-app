import React from 'react';
import { Link } from 'react-router-dom';
function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="block h-full">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.map((tag, index) => (
            <span key={index} className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-3 mt-auto pt-2">
          {post.body}
        </p>
        <div className="text-sm font-semibold text-blue-600 mt-4 pt-2 border-t border-gray-50">
          Read More →
        </div>
      </div>
    </Link>
  );
}
export default BlogCard;