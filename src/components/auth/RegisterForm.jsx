import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../ui/TextField.jsx";
import PasswordField from "../ui/PasswordField.jsx";
import PhoneField from "../ui/PhoneField.jsx";
import AuthActions from "./AuthActions.jsx";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+62",
    phone: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Nama lengkap wajib diisi";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Format e-mail tidak valid";
    if (!/^\d{8,13}$/.test(form.phone)) next.phone = "No. HP harus 8–13 digit angka";
    if (form.password.length < 6) next.password = "Kata sandi minimal 6 karakter";
    if (form.confirm !== form.password) next.confirm = "Konfirmasi kata sandi tidak sama";
    setErrors(next);
    if (Object.keys(next).length === 0) navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="Nama Lengkap"
        required
        value={form.name}
        onChange={update("name")}
        error={errors.name}
        autoComplete="name"
      />
      <TextField
        label="E-Mail"
        type="email"
        required
        value={form.email}
        onChange={update("email")}
        error={errors.email}
        autoComplete="email"
      />
      <PhoneField
        required
        countryCode={form.countryCode}
        onCountryCodeChange={(code) => setForm({ ...form, countryCode: code })}
        value={form.phone}
        onChange={update("phone")}
        error={errors.phone}
      />
      <PasswordField
        required
        value={form.password}
        onChange={update("password")}
        error={errors.password}
        autoComplete="new-password"
      />
      <PasswordField
        label="Konfirmasi Kata Sandi"
        required
        value={form.confirm}
        onChange={update("confirm")}
        error={errors.confirm}
        autoComplete="new-password"
      />
      <Link to="#" className="link-muted auth-card__forgot">
        Lupa Password?
      </Link>
      <AuthActions
        submitLabel="Daftar"
        altLabel="Masuk"
        altTo="/login"
        ssoLabel="Daftar dengan Google"
      />
    </form>
  );
}
