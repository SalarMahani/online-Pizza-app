# 🍕 Fast React Pizza

**Fast React Pizza** is a pizza-ordering app originally created by [Jonas Schmedtmann](https://github.com/jonasschmedtmann).<br>
This version has been modified, Dockerized and Specialized by me.<br>
Users can place orders by choosing pizzas, setting their delivery details, and marking their order as priority—all without creating an account.

Live Demo: 👉[https://online-pizza-app-v73z.vercel.app/](https://online-pizza-app-v73z.vercel.app/)

<br>

## 🚀 Features

- 🎯 Welcome page prompts users to enter their name before ordering
- 📦 Fetches dynamic pizza menu from an API
- ➕ Add & remove pizzas, adjust quantities in cart
- 📝 Order form auto-fills name and optionally captures phone, address, and geolocation
- 🚨 Allows marking orders as “priority” (+20% total)
- 🔁 Generates unique order ID and lets users mark priority after ordering.

<br>

## 🛠️ Technologies Used

| Layer              | Tech Stack                                 |
|--------------------|--------------------------------------------|
| UI Framework       | React + React Router v6                    |
| State Management   | Redux + Redux Toolkit + Thunks             |
| API Handling       | React‑Router loader                        |
| CSS                | Tailwind CSS                               |
| Backend Simulation | Dummy API fetches data                     |

<br>

## 📦 Getting Started

You have two options to run this project:



### 🔧 Option 1: Run Locally 

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SalarMahani/online-Pizza-app.git
   cd online-Pizza-app
   
2. Install dependencies:
   ```bash
   npm install
   
3. Run the dev server:
   ```bash
   npm run dev
   
4. Run the local backend:
   ```bash
   npm run server
   
5. Visit: http://localhost:3000


### 🔧 Option 2: Run With Docker

1. Download the image & run the container:
   ```bash
   docker run -p 3000:80 albosseeker/online-food-app

