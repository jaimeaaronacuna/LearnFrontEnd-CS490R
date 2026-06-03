import PostList from "./PostList";
import PostForm from "./PostForm";

function PostsSection({ posts, setPosts, fetchPosts, API_BASE }) {
  return (
    <div>
      <h2>Posts</h2>

      <button onClick={fetchPosts}>Refresh Posts</button>

      <PostList posts={posts} />

      <h3>Create Post</h3>
      <PostForm posts={posts} setPosts={setPosts} API_BASE={API_BASE} />
    </div>
  );
}

export default PostsSection;