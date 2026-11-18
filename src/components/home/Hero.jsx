import Button from "../ui/Button.jsx";

export default function Hero({ title, text, ctaLabel, ctaHref = "#koleksi" }) {
  return (
    <section className="container">
      <div className="hero">
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__text">{text}</p>
          <Button variant="primary" onClick={() => document.querySelector(ctaHref)?.scrollIntoView({ behavior: "smooth" })}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
