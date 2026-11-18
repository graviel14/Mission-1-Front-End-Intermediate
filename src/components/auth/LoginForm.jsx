import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../ui/TextField.jsx";
import PasswordField from "../ui/PasswordField.jsx";
import AuthActions from "./AuthActions.jsx";

export default function LoginForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Format e-mail tidak valid";
    if (form.password.length < 6) next.password = "Kata sandi minimal 6 karakter";
    setErrors(next);
    if (Object.keys(next).length === 0) navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="E-Mail"
        type="email"
        required
        value={form.email}
        onChange={update("email")}
        error={errors.email}
        autoComplete="email"
      />
      <PasswordField
        required
        value={form.password}
        onChange={update("password")}
        error={errors.password}
        autoComplete="current-password"
      />
      <Link to="#" className="link-muted auth-card__forgot">
        Lupa Password?
      </Link>
      <AuthActions
        submitLabel="Masuk"
        altLabel="Daftar"
        altTo="/register"
        ssoLabel="Masuk dengan Google"
      />
    </form>
  );
}
