import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import carRoutes from "./routes/CarRoutes";
import personRoutes from "./routes/PersonRoutes"
import carbyperson from "./routes/CarByPersonRoutes"
import phone from "./routes/PhoneRoutes"
import connect from "./connection/connection"; //Importando a função connect

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Executando a função connect
connect();

app.use("/car", carRoutes);
app.use("/person", personRoutes)
app.use("/carbyperson", carbyperson)
app.use("/phone", phone)

app.listen(PORT, () => {
	console.log(`Rodando na porta http://localhost:${PORT}`);
});
