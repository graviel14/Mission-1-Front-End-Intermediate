import Avatar from "../ui/Avatar.jsx";
import Rating from "../ui/Rating.jsx";

/** All data comes in through the `course` prop. */
export default function CourseCard({ course }) {
  const { image, title, description, instructor, rating, reviews, price } = course;

  return (
    <article className="course-card">
      <img className="course-card__img" src={image} alt={title} loading="lazy" />
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__desc">{description}</p>
      <div className="course-card__instructor">
        <Avatar name={instructor.name} />
        <div>
          <strong>{instructor.name}</strong>
          <span>{instructor.role}</span>
        </div>
      </div>
      <div className="course-card__footer">
        <Rating value={rating} count={reviews} />
        <span className="course-card__price">Rp {price}</span>
      </div>
    </article>
  );
}
