# React + Vite Starter Template

This project is a personal starter setup with commonly used libraries such as TailwindCSS, Zustand, Zod, Axios, React Router, and helpful utilities. This README documents the installed dependencies and terminal commands used to set up the environment.

---

## 🚀 Installed Dependencies

### **Main Packages**

- **zustand** – State management
- **zod** – Schema validation
- **axios** – HTTP client
- **react-router-dom** – Routing
- **dayjs** – Lightweight date utility
- **clsx** – Conditional classnames
- **tailwind-merge** – Merge Tailwind classes cleanly

### **Dev Dependencies**

- **tailwindcss** – Utility-first CSS framework
- **postcss** – CSS transformer
- **autoprefixer** – Vendor prefix generation

---

## 🧩 One‑Liner Install Commands

### **Main dependencies**

```bash
npm install zustand zod axios react-router-dom dayjs clsx tailwind-merge
```

### **Dev dependencies**

```bash
npm install -D tailwindcss postcss autoprefixer
```

### **Tailwind initialization**

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 📁 Additional Notes

- Tailwind must be enabled by updating `tailwind.config.js` and adding Tailwind directives into `src/index.css`.
- You may extend this setup with UI components like **shadcn/ui** using:

```bash
npx shadcn-ui@latest init
```

---

## 📂 Recommended Folder Structure (Best Practice)

```
src/
  assets/          # Images, fonts, static files
  components/      # Reusable UI components
  pages/           # Route-level pages
  layouts/         # Layout wrappers (auth layout, dashboard layout)
  store/           # Zustand stores
  schemas/         # Zod validation schemas
  hooks/           # Custom React hooks
  lib/             # API clients, helpers, configs
  utils/           # Pure utility functions
  styles/          # Additional CSS or Tailwind files
  router/          # Centralized routing setup
  types/           # TypeScript types (if TS)
main.jsx
App.jsx
```

## ✔️ Summary

Your React + Vite project is now equipped with:

- Tailwind styling
- Routing
- State management
- API client
- Data validation
- Utility helpers

This starter setup is ready to be cloned or reused for future projects.
