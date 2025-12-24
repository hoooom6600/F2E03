import express from "express";
const app = express();
import cors from "cors";

app.use(cors()); // middleware 中間件
app.use(express.json());

// 中間的部分會經由 middleware 做處理，ex:處理 JSON
// 客人的請求 -> 到達目的地
// 可以自己做 middleware，例如檢查有沒有權限

const recordTimer = (req, _, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] 收到請求： ${req.method} API路徑： ${req.url}`);

  next(); // 記得加上，不然會卡在這裡
};

app.use(recordTimer);

const adminAuth = (req, res, next) => {
  const { role, age } = req.query;

  if (role === "admin" && Number(age) >= 20) {
    console.log("你通過驗證了");
    next();
  } else {
    console.log("驗證失敗");
    res.status(403).json({ message: "權限不足" });
  }
};

let todos = [{ id: 1, task: "練習Express", completed: false }];

app.get("/admin/dashboard", adminAuth, (req, res) => {
  res.json({ data: "恭喜你拿到admin資料" });
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === Number(id));

  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    res.json(todos);
  } else {
    res.status(404).json({ message: "找不到" });
  }
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id !== Number(id));
  res.json({ message: "刪除成功" });
});

app.listen(3000, () => {
  console.log("運作中");
});
