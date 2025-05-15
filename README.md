
![To-Do-List](https://github.com/user-attachments/assets/ee7b8291-c300-4a47-b586-6501e6c717e2)


# ✅ To-Do-List Web App

This is a simple and responsive task management web application built with **React**. It allows users to:

- Add, edit, and delete tasks
- Mark tasks as completed
- View completed tasks with timestamps
- Automatically store tasks in browser local storage

---

## 📥 How to Download

1. Click the green **Code** button on the GitHub repository and choose **Download ZIP**, or clone it using Git:

```bash
git clone https://yashkappa.github.io/to-do-list.git
```

2. Open the folder in **Visual Studio Code** or your preferred editor.

---

## ▶️ How to Run Locally

### Step 1: Install Node Modules

Make sure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```

This will install all dependencies listed in `package.json`.

### Step 2: Start the App

```bash
npm start
```

This will launch the app in your default browser at:

```
http://localhost:3000
```

---

## 🚀 How to Host the App

### Step 1: Build the App

To prepare the app for deployment, run:

```bash
npm run build
```

This creates a production-ready version in the `build/` folder.

### Step 2: Host the App

You can now host it on any static site host like:

- **GitHub Pages**
- **Firebase Hosting**

---

### Example: Deploy to GitHub Pages

1. Install the `gh-pages` package:

```bash
npm install --save gh-pages
```

2. Add the following to your `package.json`:

```json
"homepage": "https://yashkappa.github.io/to-do-list",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:

```bash
npm run deploy
```

---

## 🗂️ Project Structure

```
task-manager-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Task.js
│   │   ├── Complete.js
│   │   └── Input.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

