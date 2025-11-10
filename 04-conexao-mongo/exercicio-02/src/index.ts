import express from "express"
import dotenv from "dotenv"
import citiesroutes from "./routes/CitiesRoutes"
import districtsroutes from "./routes/DistrictsRoutes"
import statesroutes from "./routes/StateRoutes"
import cors from "cors"
import connect from "./connection/connection"

dotenv.config()

const app = express()
const PORT = 3000

connect()

app.use(express.json())
app.use(cors())


app.use("/city", citiesroutes)
app.use("/district", districtsroutes)
app.use("/state", statesroutes)

app.listen(PORT, () => {
	console.log(`Rodando na porta http://localhost:${PORT}`);
});