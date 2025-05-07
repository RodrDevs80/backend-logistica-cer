import sequelize from "../db/connection.js";
import { DataTypes } from "sequelize";

const Paquete = sequelize.define("Paquete", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destinatario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    domicilioDestinatario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    camioneroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "camioneros",
            key: "id"
        }
    },
    provinciaId: {
        type: DataTypes.INTEGER,
        references: {
            model: "provincias",
            key: "id"
        }
    }
}, { tableName: "paquetes", timestamps: false })

export default Paquete;