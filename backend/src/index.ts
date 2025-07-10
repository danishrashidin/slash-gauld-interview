import express from "express";
import router from "./router";

const PORT = 8000;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Express server listening at PORT ${PORT}`);
});
