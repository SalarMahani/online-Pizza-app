# 🍕 Fast React Pizza

**Fast React Pizza** is a pizza-ordering app built during Jonas Schmedtmann’s *“Ultimate React Course”*. Users can place orders by choosing pizzas, setting their delivery details, and marking their order as priority—all without creating an account.

Live Demo: 👉 **[Your Deployed Link]**

## 🚀 Features

- 🎯 Welcome page prompts users to enter their name before ordering
- 📦 Fetches dynamic pizza menu from an API
- ➕ Add & remove pizzas, adjust quantities in cart
- 📝 Order form auto-fills name and optionally captures phone, address, and geolocation
- 🚨 Allows marking orders as “priority” (+20% total)
- 🔁 Generates unique order ID and lets users mark priority after ordering :contentReference[oaicite:1]{index=1}

## 🛠️ Technologies Used

| Layer              | Tech Stack                                |
|--------------------|--------------------------------------------|
| UI Framework       | React + React Router v6                    |
| State Management   | Redux + Redux Toolkit + Thunks             |
| API Handling       | React‑Router loader & action functions     |
| CSS                | Tailwind CSS                               |
| Backend Simulation | Dummy API fetches order and menu data      |
| Deployment         | Vercel                                     |


## 📦 Getting Started

You have two options to run this project:

---

### 🔧 Option 1: Run Locally 

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SalarMahani/worldwise.git
   cd worldwise
   
2. Install dependencies:
   ```bash
   npm install
   
3. Run the dev server:
   ```bash
   npm run dev
   
4. Run the local backend:
   ```bash
   npm run server
   
5. Visit: http://localhost:5173


### 🔧 Option 2: Run With Docker

1. Download & run the container:
   ```bash
   docker run -p 5173:5173 -p 9000:9000 albosseeker/worldwise
