import { Router } from "express";
import CitiesController from "../controllers/CitiesController";

const app = Router()

app.get("/", CitiesController.list)
app.post("/", CitiesController.create)
app.put("/", CitiesController.update)
app.delete("/", CitiesController.delete)

export default app