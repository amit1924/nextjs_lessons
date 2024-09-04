/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5000/posts");
            const data = await response.json();
            setPosts(data);
        };

        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            // Send DELETE request to the API
            await fetch(`http://localhost:5000/posts/${id}`, {
                method: 'DELETE',
            });

            // Remove the post from state after successful deletion
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error("Error deleting the post:", error);
            // Optionally, handle the error (e.g., show an error message)
        }
    };

    return (
        <div className="p-4">
            <Link
                href="/posts/new"
                className="mb-4 inline-block px-4 py-2 bg-green-500 text-white text-xs font-semibold rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                Create New Post
            </Link>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{post.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.content}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex space-x-2">
                                <Link
                                    href={`/posts/${post.id}`}
                                    passHref
                                    className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Read
                                </Link>
                                <Link
                                    href={`/posts/edit/${post.id}`}
                                    passHref
                                    className="px-4 py-2 bg-yellow-500 text-white text-xs font-semibold rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="px-4 py-2 bg-red-500 text-white text-xs font-semibold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page;
