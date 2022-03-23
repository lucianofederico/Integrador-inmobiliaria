const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index");
const cors = require("cors")
const { db, propiedades } = require("./models/index");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use("/api", routes);

db.sync({force: false})
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(8080, () =>
      console.log("Servidor escuchando en el puerto 8080")
    );
  })
  .catch(console.error);
