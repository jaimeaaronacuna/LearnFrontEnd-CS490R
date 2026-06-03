import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

function ReviewsSection({ reviews, setReviews, fetchReviews, API_BASE }) {
  return (
    <div>
      <h2>Reviews</h2>

      <button onClick={fetchReviews}>Refresh Reviews</button>

      <ReviewList reviews={reviews} />

      <h3>Create Review</h3>
      <ReviewForm reviews={reviews} setReviews={setReviews} API_BASE={API_BASE} />
    </div>
  );
}

export default ReviewsSection;