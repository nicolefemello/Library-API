import express from 'express';
import routes from './router/index.js'
import dbConnect from './config/mongoConfig.js';

const app = express();
app.use(express.json());
routes(app);

const dbConnection = await dbConnect();

dbConnection.on("error", (error) => {
    console.error("Erro" + error)
})

dbConnection.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

export default app;