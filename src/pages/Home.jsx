import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import Hero from "../components/home/Hero.jsx";
import CourseSection from "../components/home/CourseSection.jsx";
import Newsletter from "../components/home/Newsletter.jsx";
import { CATEGORIES, COURSES } from "../data/courses.js";

const NAV_LINKS = [{ label: "Kategori", href: "#koleksi" }];
const NAV_ACTIONS = [
  { label: "Masuk", to: "/login", variant: "outline" },
  { label: "Daftar", to: "/register", variant: "primary" },
];

export default function Home() {
  return (
    <>
      <Navbar links={NAV_LINKS} actions={NAV_ACTIONS} />
      <main>
        <Hero
          title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          text="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          ctaLabel="Temukan Video Course untuk Dipelajari!"
        />
        <CourseSection
          title="Koleksi Video Pembelajaran Unggulan"
          subtitle="Jelajahi Dunia Pengetahuan Melalui Pilihan Kursus Terbaik Kami!"
          categories={CATEGORIES}
          courses={COURSES}
        />
        <Newsletter
          eyebrow="Newsletter"
          title="Mau Belajar Lebih Banyak?"
          text="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
        />
      </main>
      <Footer />
    </>
  );
}
