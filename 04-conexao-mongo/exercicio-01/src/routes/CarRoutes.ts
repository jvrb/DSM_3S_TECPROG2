import { Router } from "express"
import car from "../controllers/CarController"

const routerCar = Router()

routerCar.get("/", car.list)
routerCar.post("/", car.create)
routerCar.put("/:id", car.put)
routerCar.delete("/:id", car.delete)

export default routerCar