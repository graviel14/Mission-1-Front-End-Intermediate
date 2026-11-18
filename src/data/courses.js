export const CATEGORIES = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const base = {
  title: "Big 4 Auditor Financial Analyst",
  description:
    "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan sertifikat siap membantu Anda untuk lebih siap menghadapi dunia kerja.",
  instructor: { name: "Jenna Ortega", role: "Senior Accountant di Gojek" },
};

export const COURSES = [
  { id: 1, category: "Pemasaran", rating: 3.5, reviews: 86, price: "300K" },
  { id: 2, category: "Desain", rating: 4.0, reviews: 120, price: "300K" },
  { id: 3, category: "Pengembangan Diri", rating: 4.5, reviews: 64, price: "300K" },
  { id: 4, category: "Bisnis", rating: 3.0, reviews: 45, price: "300K" },
  { id: 5, category: "Pemasaran", rating: 5.0, reviews: 210, price: "300K" },
  { id: 6, category: "Desain", rating: 3.5, reviews: 77, price: "300K" },
  { id: 7, category: "Bisnis", rating: 4.0, reviews: 98, price: "300K" },
  { id: 8, category: "Pengembangan Diri", rating: 4.5, reviews: 150, price: "300K" },
  { id: 9, category: "Pemasaran", rating: 3.5, reviews: 33, price: "300K" },
].map((c) => ({
  ...base,
  ...c,
  image: `https://picsum.photos/seed/videobelajar-${c.id}/480/300`,
}));
