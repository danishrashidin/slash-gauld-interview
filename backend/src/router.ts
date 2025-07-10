import { Router } from "express";
import pingRoutes from "./routes/ping.route";

const router = Router();

router.use(pingRoutes);

export default router;
