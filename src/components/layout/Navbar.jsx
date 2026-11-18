import { useState } from "react";
import Logo from "../ui/Logo.jsx";
import Button from "../ui/Button.jsx";
import { MenuIcon, CloseIcon } from "../ui/Icons.jsx";

/**
 * Props:
 *  - links: [{ label, href }]
 *  - actions: [{ label, to, variant }] shown at the right (Masuk / Daftar)
 */
export default function Navbar({ links = [], actions = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo />

        <nav className="navbar__links" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          <div className="navbar__actions">
            {actions.map((a) => (
              <Button key={a.label} to={a.to} variant={a.variant}>
                {a.label}
              </Button>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Buka menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="navbar__menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
          {actions.map((a) => (
            <Button key={a.label} to={a.to} variant={a.variant} block>
              {a.label}
            </Button>
          ))}
        </div>
      )}
    </header>
  );
}
