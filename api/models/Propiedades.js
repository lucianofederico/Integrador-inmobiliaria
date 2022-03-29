const S = require("sequelize");
const db = require("./db");

class Propiedades extends S.Model {}

Propiedades.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type: S.TEXT,
      allowNull: false,
      },
    precio:{
      type: S.INTEGER,
      allowNull: false,
  },
    ubicacion: {
      type: S.STRING,
      allowNull: false,
    },
    imagen: {
      type: S.STRING,
      allowNull: false,
    },
    disponible: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    categoria:{
      type: S.ARRAY(S.STRING),
      allowNull:false,
    }
  },
  { sequelize: db, modelName: "propiedades" }
);

module.exports = Propiedades;
