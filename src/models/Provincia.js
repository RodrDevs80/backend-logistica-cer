import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";


const Provincia = sequelize.define("Provincia", {
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
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, { tableName: "provincias", timestamps: false })

export default Provincia;