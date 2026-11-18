import AuthLayout from "../components/auth/AuthLayout.jsx";
import AuthCard from "../components/auth/AuthCard.jsx";
import RegisterForm from "../components/auth/RegisterForm.jsx";

export default function Register() {
  return (
    <AuthLayout>
      <AuthCard
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
}
