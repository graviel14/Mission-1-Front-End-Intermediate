import Logo from "../ui/Logo.jsx";

/** Page shell for login/register: logo header + centered body. */
export default function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      <header className="auth-page__header">
        <div className="container">
          <Logo />
        </div>
      </header>
      <main className="auth-page__body">{children}</main>
    </div>
  );
}
