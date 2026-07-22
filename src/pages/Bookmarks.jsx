import React from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtoms";
import BlogCard from "../components/BlogCard";

function Bookmarks() {
  const [bookmarks] = useAtom(bookmarksAtom);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-[#6F4E37] mb-6 text-center">
        Bookmarked Posts
      </h1>

  


      {bookmarks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#6F4E37] text-lg">No bookmarked posts yet.</p>
        </div>
      ) : (
        


        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarks.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookmarks;