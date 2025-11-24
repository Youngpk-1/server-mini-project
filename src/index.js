import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const port = 3000;

app.use(express.json());

let fruits = [
  { id: randomUUID(), name: "Apple", color: "Red" },
  { id: randomUUID(), name: "Banana", color: "Yellow" },
  { id: randomUUID(), name: "Grapes", color: "Green" },
  { id: randomUUID(), name: "Peach", color: "Peach" },
  { id: randomUUID(), name: "Plum", color: "Purple" },
];

app.get("fruits", (req, res) => {
  res.status(200).json(fruits);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
