# 🍎 Fruits API

A clean, visual, and beginner‑friendly **Express.js REST API** for
managing fruits stored in memory.\
This project is great for learning CRUD basics, routing, JSON handling,
and building mini APIs.

---

## 🌟 **Overview**

The Fruits API allows you to: - 📥 Add fruits\

- 📤 Retrieve all fruits or a specific fruit\
- 🗑 Delete fruits\
- 🔑 Use automatically generated unique IDs\
- ⚡ Test quickly using Thunder Client, Postman, or any frontend

---

## 🧱 **Project Structure**

    project/
    │── index.js        # Main Express app
    │── package.json
    │── README.md

---

## 🚀 **Available Endpoints**

### **1️⃣ GET /fruits**

Returns all fruits in storage.

**Response Example**

```json
{
  "Fruits": [
    {
      "id": "abc123",
      "name": "Apple",
      "color": "Red",
      "taste": ["sweet", "tart"]
    }
  ]
}
```

---

### **2️⃣ POST /fruits**

Create a new fruit.

📌 **Required fields:**\

- `name`\
- `color`\
- `taste`

**Example Request Body**

```json
{
  "name": "Peach",
  "color": "Orange",
  "taste": "sweet"
}
```

**Success Response**

```json
{
  "id": "generated-uuid",
  "name": "Peach",
  "color": "Orange",
  "taste": "sweet"
}
```

---

### **3️⃣ GET /fruits/:id**

Return a single fruit using its ID.

**Example**

    GET /fruits/7c49e1d9-f39a-4a3c-bfae-8cd2f91bdc16

---

### **4️⃣ DELETE /fruits/:id**

Delete a fruit by ID.

**Success Response**

```json
{
  "message": "Fruit deleted",
  "fruit": {
    "id": "7c49e1d9-f39a-4a3c-bfae-8cd2f91bdc16",
    "name": "Apple",
    "color": "Red",
    "taste": ["sweet", "tart"]
  }
}
```

---

## 🛠 **How to Run the API**

```bash
npm install
node index.js
```

The server will start at:\
👉 **http://localhost:3000**

---

## 🧪 **Testing the API**

You can test using: - Thunder Client (VS Code) - Postman - Insomnia -
curl - Your React frontend

---

## 💡 **Notes**

- This API uses **temporary in‑memory storage**\
- All fruit data resets when the server restarts\
- Perfect for practice, demos, and learning Express

---

## 🎨 **Visual Summary**

Action Method Endpoint Description

---

📋 List Fruits GET `/fruits` Returns all fruits
➕ Create Fruit POST `/fruits` Adds a new fruit
🔍 Find Fruit GET `/fruits/:id` Gets a fruit by ID
🗑 Delete Fruit DELETE `/fruits/:id` Removes fruit by ID

---

## ✔️ **Simple. Clean. Visual. Beginner‑friendly.**

Enjoy building! 🚀
