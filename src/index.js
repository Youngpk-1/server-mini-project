import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
const port = 3000;

app.use(express.json());

let fruitsStorage = [
  {
    id: randomUUID(),
    name: "Apple",
    color: "Red",
    taste: ["sweet", "tart", "sour"],
  },
  { id: randomUUID(), name: "Banana", color: "Yellow", taste: "sweet" },
  { id: randomUUID(), name: "Grapes", color: "Green", taste: "sweet/sour" },
  { id: randomUUID(), name: "Peach", color: "Peach", taste: "semi-sweet" },
  { id: randomUUID(), name: "Plum", color: "Purple", taste: "tart" },
];

app.get("/fruits", (req, res) => {
  res.status(200).json({Fruits: fruitsStorage});
});

app.post("/fruits", (req, res) => {
  const { name, color } = req.body;
  if (!name || !color || !taste) {
    return res
      .status(400)
      .json({ error: "Name, color, and taste are required" });
  }
  const newFruit = { id: randomUUID(), name, color, taste };
  fruits.push(newFruit);
  res.status(201).json(newFruit);
});

app.get("/fruits/:id", (req, res) => {
  const fruit = fruits.find((fruit) => fruit.id === req.params.id);
  if (!fruit) return res.status(404).json({ error: "Fruit not found" });
  res.json(fruit);
});

app.delete("/fruits/:id", (req, res) => {
  const fruit = fruits.find((fruit) => fruit.id === req.params.id);
  if (!fruit) return res.status(404).json({ error: "Fruit not found" });

  fruits = fruits.filter((fruit) => fruit.id !== req.params.id);
  res.json({ message: "Fruit deleted", fruit });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
