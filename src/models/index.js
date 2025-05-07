import sequelize from "../db/connection.js";
import Camionero from "./Camionero.js";
import Camion from "./Camion.js";
import CamioneroXCamion from "./CamioneroXCamion.js";
import Provincia from "./Provincia.js";
import Paquete from "./Paquete.js";

// --- Definir Asociaciones ---

// Relación Camionero <-> CamioneroXCamion (1:N)
Camionero.hasMany(CamioneroXCamion, {
    foreignKey: "camioneroId",
    sourceKey: "id",
});
CamioneroXCamion.belongsTo(Camionero, {
    foreignKey: "camioneroId",
    targetKey: "id",
});

// Relación Camion <-> CamioneroXCamion (1:N)
Camion.hasMany(CamioneroXCamion, {
    foreignKey: "camionId",
    sourceKey: "id",
});
CamioneroXCamion.belongsTo(Camion, {
    foreignKey: "camionId",
    targetKey: "id",
});

// Relación Camionero <-> Paquete (1:N)
Camionero.hasMany(Paquete, {
    foreignKey: "camioneroId",
    sourceKey: "id",
});
Paquete.belongsTo(Camionero, {
    foreignKey: "camioneroId",
    targetKey: "id",
});

// Relación Provincia<-> Paquete (1:N)
Provincia.hasMany(Paquete, {
    foreignKey: "provinciaId",
    sourceKey: "id",
});
Paquete.belongsTo(Provincia, {
    foreignKey: "provinciaId",
    targetKey: "id",
});


export { sequelize, Camionero, Camion, CamioneroXCamion, Provincia, Paquete }