import { useEffect, useState } from "react";
import PostsSection from "./components/posts/PostsSection";
import ReviewsSection from "./components/reviews/ReviewsSection";

const API_BASE = "http://localhost:3003/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/posts`);
      const data = await res.json();
      setPosts(data);
    } catch {
      setError("Failed to fetch posts");
    }
    setLoading(false);
  };

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/reviews`);
      const data = await res.json();
      setReviews(data);
    } catch {
      setError("Failed to fetch reviews");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    fetchReviews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>490R Swagger</h1>

      <PostsSection
        posts={posts}
        setPosts={setPosts}
        fetchPosts={fetchPosts}
        API_BASE={API_BASE}
      />

      <ReviewsSection
        reviews={reviews}
        setReviews={setReviews}
        fetchReviews={fetchReviews}
        API_BASE={API_BASE}
      />
    </div>
  );
}

export default App;