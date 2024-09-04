"use client";
import { useRouter } from 'next/navigation'; // Correct import for App Directory
import { useEffect, useState } from 'react';

const PostPage = ({params}) => {
    const id =params.id
    const router = useRouter();
    const [post, setPost] = useState(null);
    

    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
                const response = await fetch(`http://localhost:5000/posts/${id}`);
                const data = await response.json();
                setPost(data);
            };

            fetchPost();
        }
    }, [id]);

    const handleDelete = async () => {
        try {
            // Send DELETE request to the API
            await fetch(`http://localhost:5000/posts/${id}`, {
                method: 'DELETE',
            });

            // Redirect to the posts list after deletion
            router.push('/posts');
        } catch (error) {
            console.error("Error deleting the post:", error);
            // Optionally, handle the error (e.g., show an error message)
        }
    };

    if (!post) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="mt-2 text-gray-600">{post.content}</p>
            <button
                onClick={handleDelete}
                className="mt-4 px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Delete
            </button>
        </div>
    );
};

export default PostPage;
