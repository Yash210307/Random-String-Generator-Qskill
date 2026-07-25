# 🔐 Random String Generator

A simple and interactive **Random String Generator** built with **React.js** that generates secure random alphanumeric strings. The project demonstrates the use of React Hooks such as **useState**, **useCallback**, and **useEffect** while providing a clean and responsive user interface.

---

## 📌 Features

- 🎲 Generate random alphanumeric strings
- 📏 Adjustable string length using a slider
- 📋 Copy generated string to clipboard
- ⚡ Automatic string generation on page load
- 🔄 Generates a new string whenever the length changes
- 🎨 Modern glassmorphism UI with responsive design
- ⚛️ Built using React Hooks

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- Vite

---

## ⚛️ React Hooks Used

### useState
Used to store:
- Generated random string
- Selected string length

### useCallback
Used to optimize the random string generation function and prevent unnecessary re-creation.

### useEffect
Automatically generates a random string:
- When the application loads
- Whenever the string length changes

---

## 📂 Project Structure

```
random-string-generator/
│── public/
│
│── src/
│   ├── components/
│   │   └── RandomGenerator.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/random-string-generator.git
```

### Navigate to the project

```bash
cd random-string-generator
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 💻 How to Use

1. Launch the application.
2. Move the slider to select the desired string length.
3. A random string is automatically generated.
4. Click **Generate** to create a new random string.
5. Click **Copy** to copy the generated string to your clipboard.

---

## 📸 Preview

```
----------------------------------------
        Random String Generator

      String Length: 15

   hG72PxQa9LmRwUz

   [ Generate ]   [ Copy ]
----------------------------------------
```

---

## 🎯 Learning Outcomes

- Understanding React component structure
- Working with React Hooks
- Managing component state using `useState`
- Optimizing functions using `useCallback`
- Handling side effects with `useEffect`
- Building responsive user interfaces with CSS
- Using the Clipboard API in JavaScript

---

## 🔮 Future Enhancements

- Include symbols and special characters
- Password strength indicator
- Dark/Light mode toggle
- Custom character selection
- Password history
- Download generated strings as a text file

---

## 👨‍💻 Author

**Yash Vinchurkar**

GitHub: https://github.com/Yash210307

---

## 📜 License

This project is created for educational and learning purposes.
