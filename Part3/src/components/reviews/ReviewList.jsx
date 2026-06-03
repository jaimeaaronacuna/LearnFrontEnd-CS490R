function ReviewList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review._id}>
          Rating: {review.rating} - {review.comment}
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;