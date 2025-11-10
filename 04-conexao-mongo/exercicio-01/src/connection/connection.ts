import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/exercicio01";

function connect() {
	mongoose
		.connect(uri, {
			serverSelectionTimeoutMS: 5000,
			maxPoolSize: 10,
		})
		.then(() => {
			console.log("Conectado ao MongoDB");
		})
		.catch((e) => {
            console.error("Erro ao conectar ao MongoDB", e.message)
        });
    
}

export default connect
