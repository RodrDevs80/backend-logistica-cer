import express from "express";
import cors from "cors";
import morgan from "morgan";
import { sequelize } from "./src/models/index.js";
import camioneroRouter from "./src/routes/camioneroRoutes.js";
import camionRouter from "./src/routes/camionRoutes.js";
import provinciaRouter from "./src/routes/provinciaRoutes.js";
import camioneroXcamionRoutes from "./src/routes/camioneroXCamion.js";
import paqueteRoutes from "./src/routes/paquetesRoutes.js";


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(camioneroRouter);
app.use(camionRouter);
app.use(provinciaRouter);
app.use(camioneroXcamionRoutes);
app.use(paqueteRoutes);

app.get('/', (req, res) => {
    res.send("¡Backend funcionando!");
})

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log(
            "✅ Conexión a la base de datos establecida correctamente."
        );

        // Sincroniza los modelos con la base de datos.
        // force: false (default) - No borra tablas si existen.
        // force: true - Borra y recrea tablas. ¡PELIGROSO en producción!
        // alter: true - Intenta modificar tablas existentes.
        await sequelize.sync({ force: false }); // Cambia bajo tu propio riesgo
        console.log("🔄 Modelos sincronizados con la base de datos.");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error al iniciar el servidor:", error);
    }
}



startServer();



