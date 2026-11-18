import AuthLayout from "../components/auth/AuthLayout.jsx";
import AuthCard from "../components/auth/AuthCard.jsx";
import LoginForm from "../components/auth/LoginForm.jsx";

export default function Login() {
  return (
    <AuthLayout>
      <AuthCard
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutkan belajarmu di videobelajar."
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}
