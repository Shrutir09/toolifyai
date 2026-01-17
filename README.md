# ToolifyAI 🚀

**Discover, Compare & Save the Best AI Tools**

ToolifyAI is a modern web application that helps users **discover, explore, and manage the best AI tools** across different categories.
It is designed to simplify how people find AI solutions by offering a clean UI, structured listings, and user-friendly features like favorites and search.

---

## ✨ What is ToolifyAI?

**ToolifyAI** is an AI tools discovery platform where users can:

* 🔍 Explore AI tools by category
* ❤️ Save tools to favorites
* ⭐ View ratings and reviews (extensible)
* 🔗 Visit official tool websites
* 🔐 Use authentication for a personalized experience

The goal of ToolifyAI is to create a **central hub for AI tools**, making it easier for creators, developers, and businesses to find the right tools quickly.

---

## 🧩 Core Features

* User authentication (Email & Password)
* AI tools listing with categories and pricing info
* Favorite tools (saved per user)
* Search and filtering
* Secure backend with Row Level Security (RLS)
* Scalable architecture for future features (admin panel, reviews, analytics)

---

## 🛠️ Tech Stack

**Frontend**

* Vite
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

**Backend**

* Supabase

  * Authentication
  * Database (PostgreSQL)
  * Row Level Security (RLS)

---

## 📁 Project Structure (Simplified)

```
src/
├── components/
│   └── ui/
├── pages/
│   ├── Tools.tsx
│   └── ToolDetail.tsx
├── integrations/
│   └── supabase/
│       └── client.ts
├── hooks/
├── lib/
└── App.tsx
```

---

## ⚙️ Environment Setup

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-public-key
```

Then run:

```bash
npm install
npm run dev
```

---

## 🔐 Authentication & Security

* Supabase Auth is used for user login/signup
* Favorites and user data are protected using **Row Level Security (RLS)**
* Users can only access and modify their own data

---

## 🚧 Future Enhancements

* Admin dashboard for managing tools
* Tool reviews and ratings system
* Trending tools logic
* Advanced filters and sorting
* Pagination and performance optimizations

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome.
Feel free to fork the repository and submit pull requests.

---

## 📜 License

This project is open-source and available under the **MIT License**.

