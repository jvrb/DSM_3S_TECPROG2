import { Router } from "express";
import person from "../controllers/PersonController"

const app = Router()

app.get("/", person.list)
app.post("/", person.create)

export default app