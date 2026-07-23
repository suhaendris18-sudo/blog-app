import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
import { useAtom } from 'jotai';
import { postsAtom } from '../atoms/bookmarkAtoms';
function CreatePost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useAtom(postsAtom); 

  const handleCreate = (newPost) => {


    const createdPost = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body,
      tags: ['Local'],
    };

    setPosts([createdPost, ...posts]);

    
    alert('The blog is created in local state!');
    navigate('/');
  };

  
  return (
    <div className="max-w-xl mx-auto p-6 bg-[#F8F4E9] my-10 border rounded-xl shadow-sm">
      <button onClick={() => navigate('/')} className="text-sm text-[#6F4E37] mb-4 block">
        ← Back to Home
      </button>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Write a New post</h1>
      <BlogForm onSubmit={handleCreate} />
    </div>
  );
}
export default CreatePost;

