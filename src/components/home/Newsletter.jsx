import { useState } from "react";
import Button from "../ui/Button.jsx";

export default function Newsletter({ eyebrow, title, text }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setEmail("");
  };

  return (
    <section className="container">
      <div className="newsletter">
        <div className="newsletter__content">
          <p className="newsletter__eyebrow">{eyebrow}</p>
          <h2 className="newsletter__title">{title}</h2>
          <p className="newsletter__text">{text}</p>
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="newsletter-email">
              E-Mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="accent">
              Subscribe
            </Button>
          </form>
          {sent && <p className="newsletter__text">Terima kasih, kamu sudah berlangganan!</p>}
        </div>
      </div>
    </section>
  );
}
