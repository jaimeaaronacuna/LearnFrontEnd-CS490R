function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post._id}>
          {post.description} ({post.calories} cal)
        </li>
      ))}
    </ul>
  );
}

export default PostList;