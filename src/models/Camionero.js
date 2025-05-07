import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const Camionero = sequelize.define('Camionero', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    cuit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    domicilio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "camioneros",
    timestamps: false,
}
)

export default Camionero;