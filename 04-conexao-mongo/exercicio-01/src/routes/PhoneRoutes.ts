import { Router } from "express";
import PhoneController from "../controllers/PhoneController"

const app = Router()

app.get("/", PhoneController.list)
app.post("/", PhoneController.create)

export default app