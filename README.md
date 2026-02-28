

# 🌤️ Weather App

🔗 **Live Website:** [https://weatherapp-gamma-seven.vercel.app/](https://weatherapp-gamma-seven.vercel.app/)

A simple and beautiful Weather App that shows real-time weather information of any city using the **OpenWeatherMap API**.

This project is built using:

* 🧱 HTML
* 🎨 CSS
* ⚡ JavaScript
* 🌍 OpenWeatherMap API
* 🚀 Vercel (for deployment)

---

## 📸 Preview

When you enter a city name, the app shows:

* 🌡 Temperature (in °C)
* ☁ Weather Description
* 💧 Humidity
* 🌬 Wind Speed
* 🌍 Country Name

---

# 📂 Project Structure

```
weather-app/
│
├── index.html        # Main HTML file
├── style.css         # Styling file
├── script.js         # JavaScript logic
└── README.md         # Project documentation
```

---

# ⚙️ How It Works (Simple Explanation)

1. User enters a city name.
2. JavaScript sends request to OpenWeatherMap API.
3. API sends weather data.
4. The app displays the data on screen.

---

# 🔑 API Setup (Very Important)

This app uses **OpenWeatherMap API**.

## Step 1: Create Free API Key

1. Go to: [https://openweathermap.org/](https://openweathermap.org/)
2. Click **Sign Up**
3. Create account
4. Go to **My API Keys**
5. Copy your API key

---

## Step 2: Add API Key in Script

Open `script.js`

Replace this line:

```javascript
const apiKey = "YOUR_API_KEY";
```

With:

```javascript
const apiKey = "your_actual_api_key_here";
```

Save the file ✅

---

# 💻 How To Run This Project Locally

## Step 1: Clone Repository

```bash
git clone https://github.com/your-username/weather-app.git
```

## Step 2: Go Into Folder

```bash
cd weather-app
```

## Step 3: Open in Browser

Simply double click `index.html`

OR use Live Server (Recommended)

If using VS Code:

1. Install Live Server Extension
2. Right click `index.html`
3. Click **Open with Live Server**

---

# 🚀 Deploy to Vercel (Step-by-Step)

This project is already deployed here:

🔗 [https://weatherapp-gamma-seven.vercel.app/](https://weatherapp-gamma-seven.vercel.app/)

If you want to deploy yourself, follow below steps:

---

## Step 1: Install Node.js

Download from:

[https://nodejs.org/](https://nodejs.org/)

Check installation:

```bash
node -v
npm -v
```

---

## Step 2: Install Vercel CLI

```bash
npm install -g vercel
```

---

## Step 3: Login to Vercel

```bash
vercel login
```

---

## Step 4: Deploy Project

Inside project folder run:

```bash
vercel
```

Follow instructions in terminal.

To deploy to production:

```bash
vercel --prod
```

---

# 🛠 Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* OpenWeatherMap API
* Vercel Hosting

---

# 🌟 Features

✔ Real-time weather data
✔ Clean and simple UI
✔ Beginner-friendly project
✔ API integration
✔ Deployed online
✔ Responsive design

---

# 📚 What I Learned

* How APIs work
* How to use Fetch in JavaScript
* How to handle async/await
* How to deploy websites
* How to manage GitHub repository

---

# 🔮 Future Improvements

* 🌙 Dark Mode
* 📍 Auto detect location
* 🌡 Toggle Celsius / Fahrenheit
* 🖼 Weather icons animation
* 📱 Mobile UI improvements 

Jus
