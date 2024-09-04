"use client";
import { useRouter } from 'next/navigation'; // For Next.js 13+
import { useState } from 'react';

const NewPostPage = () => {
    const router = useRouter();
    const [post, setPost] = useState({ title: '', content: '' });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            });

            if (!response.ok) throw new Error('Failed to create post');

            // Redirect to the posts list or the newly created post page
            router.push('/posts');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Create New Post</h1>
            {error && <div className="mt-2 text-red-600">{error}</div>}
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-red-500 bg-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={post.content}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full border-green-500 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-red-500 bg-black"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default NewPostPage;
