import express from "express";

const PORT = 8000;
const app = express();

app.get("/ping", (_req, res) => {
  res.json({
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Express server listening at PORT ${PORT}`);
});
