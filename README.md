
# Task Manager App

A lightweight, localStorage-backed task manager built with React and TypeScript. It provides CRUD functionality for managing tasks, featuring a reducer-driven state architecture and modular components for maintainability.

---

## 🚀 Features

- **Add / Edit / Delete Tasks**
- **Mark Tasks as Complete**
- **Persistent State via `localStorage`**
- **Functional State Management with `useReducer`**
- **Edit Mode Toggle**

---

## 🧱 Tech Stack

- **React** (Functional Components)
- **TypeScript**
- **DaisyUI / TailwindCSS**
- **LocalStorage API**
- **Reducer Pattern for State Management**

---

## 🧠 State Management

The application uses a reducer to manage all task-related operations, with actions defined in `ConstantsType.ts`. It supports the following action types:

- `ADD_TASK`
- `DELETE_TASK`
- `COMPLETE_TASK`
- `START_EDIT_MODE`
- `CANCEL_EDIT_MODE`
- `SAVE_EDIT_MODE`

State is persisted in the browser's `localStorage` under the key `tasks_state`.

---

## 📦 Installation & Usage

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
npm install
npm run dev # or npm start
