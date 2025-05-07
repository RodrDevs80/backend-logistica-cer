import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";


const CamioneroXCamion = sequelize.define("CamioneroXCamion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
        unique: true
    },
    camioneroId: {
        type: DataTypes.INTEGER, // Coincidir con Camionero.id
        allowNull: false,
        references: {
            model: "camioneros", // Nombre de la TABLA
            key: "id",
        },
    },
    camionId: {
        type: DataTypes.INTEGER, // Coincidir con Camion.id
        allowNull: false,
        references: {
            model: "camiones", // Nombre de la TABLA
            key: "id",
        },
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    }


}, { tableName: "camionero_x_camion", timestamps: false })

export default CamioneroXCamion;