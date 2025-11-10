import { Router } from "express";
import DistrictsController from "../controllers/DistrictsController";

const app = Router()

app.get("/", DistrictsController.list)
app.post("/", DistrictsController.create)
app.put("/", DistrictsController.put)
app.delete("/", DistrictsController.delete)

export default app