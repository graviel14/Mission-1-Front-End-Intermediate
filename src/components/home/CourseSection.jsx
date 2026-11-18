import { useState } from "react";
import CategoryTabs from "./CategoryTabs.jsx";
import CourseCard from "./CourseCard.jsx";

export default function CourseSection({ title, subtitle, categories, courses }) {
  const [active, setActive] = useState(categories[0]);

  const visible =
    active === categories[0] ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="koleksi" className="container section">
      <h2 className="section__title">{title}</h2>
      <p className="section__subtitle">{subtitle}</p>

      <CategoryTabs categories={categories} active={active} onChange={setActive} />

      <div className="course-grid">
        {visible.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
