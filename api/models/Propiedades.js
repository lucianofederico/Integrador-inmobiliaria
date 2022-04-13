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
      // get(){
      //   const truncateDescription = this.getDataValue ("descripcion");
      //   return truncateDescription.substring(0,100) + "...";
      // },
      // allowNull: false,
      },
    precio:{
      type: S.INTEGER,
      // allowNull: false,
  },
    ubicacion: {
      type: S.STRING,
      // allowNull: false,
    },
    imagen: {
      type: S.STRING,
      // allowNull: false,
    },
    disponible: {
      type: S.BOOLEAN,
      defaultValue: true,
      set(value){
        if (!value){
        this.setDataValue(
          "nombre",
           this.getDataValue("nombre").concat ("NO DISPONIBLE")
        );
      }
      this.setDataValue("disponible", value)
    },
    },
    categoria:{
      type: S.ARRAY(S.STRING),
    }
  },
  { sequelize: db, modelName: "propiedades" }
);

module.exports = Propiedades;
