import { useNavigate } from 'react-router-dom';
import BlogForm from '../components/BlogForm';
function CreatePost() {
  const navigate = useNavigate();
  const handleCreate = (newPost) => {
    alert(' the blog is created in local state!');
    navigate('/'); 
  };
  return (
    <div className="max-w-xl mx-auto p-6 bg-white my-10 border rounded-xl shadow-sm">
      <button onClick={() => navigate('/')} className="text-sm text-blue-600 mb-4 block">
        ← Back to Home
      </button>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Write a New Post</h1>
      <BlogForm onSubmit={handleCreate} />
    </div>
  );
}
export default CreatePost;

