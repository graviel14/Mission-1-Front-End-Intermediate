import { StarIcon } from "./Icons.jsx";

export default function Rating({ value, count }) {
  const rounded = Math.round(value);

  return (
    <span className="rating" aria-label={`Rating ${value} dari 5`}>
      <span className="rating__stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <StarIcon key={n} filled={n <= rounded} />
        ))}
      </span>
      {value.toFixed(1)} ({count})
    </span>
  );
}
