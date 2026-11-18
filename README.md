# VideoBelajar

Static ReactJS website (Vite + React Router) sliced from the VideoBelajar Figma template: **Login**, **Register** and **Homepage**, responsive for desktop and mobile.

## Run locally

```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
npm run preview  # preview the build
```

## Structure

```
src/
  components/
    ui/       Button, TextField, PasswordField, PhoneField, Logo, Avatar, Rating, Icons
    layout/   Navbar, Footer
    auth/     AuthLayout, AuthCard, AuthActions, LoginForm, RegisterForm
    home/     Hero, CategoryTabs, CourseCard, CourseSection, Newsletter
  data/       courses.js (data passed to components via props)
  pages/      Login, Register, Home
  styles/     global (design tokens from Figma), ui, layout, auth, home
```

## Notes

- Reusable components receive data through props (e.g. `CourseCard course={...}`, `Hero title text ctaLabel`).
- Responsive layout uses CSS media queries (breakpoints 767px / 991px) — no extra library needed.
- Course/hero images use placeholder photos from picsum.photos. Replace them with the images exported from Figma (put them in `public/` or `src/assets/`).
- Deploy: `vercel.json` (Vercel) and `public/_redirects` (Netlify) are included so client-side routes work on refresh.

## Routes

| Path | Page |
| --- | --- |
| `/` | Homepage |
| `/login` | Login |
| `/register` | Register |
