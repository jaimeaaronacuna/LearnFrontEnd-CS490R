import { useState } from "react";

function PostForm({ posts, setPosts, API_BASE }) {
  const [newPost, setNewPost] = useState({
    user_id: "",
    description: "",
    ingredients: "",
    calories: "",
    protein: "",
  });

  const createPost = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      const data = await res.json();
      setPosts([...posts, data]);
    } catch {
      console.log("Failed to create post");
    }
  };

  return (
    <form onSubmit={createPost}>
      <input placeholder="User ID" onChange={(e) => setNewPost({ ...newPost, user_id: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setNewPost({ ...newPost, description: e.target.value })} />
      <input placeholder="Ingredients" onChange={(e) => setNewPost({ ...newPost, ingredients: e.target.value })} />
      <input placeholder="Calories" onChange={(e) => setNewPost({ ...newPost, calories: e.target.value })} />
      <input placeholder="Protein" onChange={(e) => setNewPost({ ...newPost, protein: e.target.value })} />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default PostForm;