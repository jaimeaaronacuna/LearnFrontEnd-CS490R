import { useState } from "react";

function ReviewForm({ reviews, setReviews, API_BASE }) {
  const [newReview, setNewReview] = useState({
    user_id: "",
    post_id: "",
    rating: "",
    comment: "",
  });

  const createReview = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      const data = await res.json();
      setReviews([...reviews, data]);
    } catch {
      console.log("Failed to create review");
    }
  };

  return (
    <form onSubmit={createReview}>
      <input placeholder="User ID" onChange={(e) => setNewReview({ ...newReview, user_id: e.target.value })} />
      <input placeholder="Post ID" onChange={(e) => setNewReview({ ...newReview, post_id: e.target.value })} />
      <input placeholder="Rating" onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })} />
      <input placeholder="Comment" onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} />
      <button type="submit">Create Review</button>
    </form>
  );
}

export default ReviewForm;