import express from "express";
import routes from "./routes/index";

app.use(express.json());

app.use("api/", routes);
app.get("/", (req, res) => {
  res.json({
    message: "success",
  });
});

export default app;
