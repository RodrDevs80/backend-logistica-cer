import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Camion = sequelize.define("Camion", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    patente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacidadDeCarga: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "camiones",
    timestamps: false,
})

export default Camion;