import { Router } from "express";
import StatesController from "../controllers/StatesController";

const app = Router()

app.get("/", StatesController.list)
app.post("/", StatesController.create)
app.put("/", StatesController.put)
app.delete("/", StatesController.delete)

export default app