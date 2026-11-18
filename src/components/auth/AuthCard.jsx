/** White card with title + subtitle. Form content is passed as children. */
export default function AuthCard({ title, subtitle, children }) {
  return (
    <section className="auth-card">
      <h1 className="auth-card__title">{title}</h1>
      <p className="auth-card__subtitle">{subtitle}</p>
      {children}
    </section>
  );
}
