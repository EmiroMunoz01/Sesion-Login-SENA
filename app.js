const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dotenv.config({ path: "./env/.env" });

app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

//invoraremos al modulo de hashing para encriptar las contrasenas

const bcryptjs = require("bcryptjs");

//esto es un middleware que almacena los datos de sesion en el servidor
const session = require("express-session");
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

const conexion = require("./database/db");

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3000, (req, res) => {
  console.log("Server Runing in http://localhost:3000");
});
