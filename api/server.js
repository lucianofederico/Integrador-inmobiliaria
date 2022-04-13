const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes/index");
const cors = require("cors");
const volleyball = require("volleyball");
const { db, Propiedades, User } = require("./models/index");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bodyParser = require ("body-parser")


app.use(cors());


app.use(volleyball);
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser)
app.use(cookieParser());
app.use(
  session({ secret: "integrador", resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }

            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log("deserializeA", id)
  User.findByPk(id)
    .then((user) => {
      console.log("deserialize", user)
      done(null, user);
    })
    .catch(done);
});



app.use("/api", routes);

db.sync({ force: false })
  .then(function () {
    // Recién ahora estamos seguros que la conexión fue exitosa
    app.listen(8080, () =>
      console.log("Servidor escuchando en el puerto 8080")
    );
  })
  .catch(console.error);
