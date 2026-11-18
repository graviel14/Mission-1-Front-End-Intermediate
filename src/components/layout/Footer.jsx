import Logo from "../ui/Logo.jsx";

const COLUMNS = [
  {
    title: "Kategori",
    items: ["Digital & Technology", "Marketing", "Management", "Pengembangan Diri", "Desain"],
  },
  {
    title: "Perusahaan",
    items: ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"],
  },
  {
    title: "Komunitas",
    items: ["Tips Belajar", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__about">
          <Logo />
          <strong>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</strong>
          <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p>+62-877-7123-1234</p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="footer__col">
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <span>@2023 Gerald Gaji. All Rights Reserved.</span>
        <div className="footer__social" aria-label="Media sosial">
          {["in", "f", "ig", "x"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
