import { Router } from "express";
import CarByPersonController from "../controllers/CarByPersonController";

const app = Router()

app.get("/", CarByPersonController.list)
app.post("/", CarByPersonController.create)

export default app