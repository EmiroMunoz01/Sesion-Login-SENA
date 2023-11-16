const express = require("express");
const app = express();
const dotenv = require("dotenv");

//convertiremos los valores enviados por el body en un formato entendible para el backend
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dotenv.config({ path: "./env/.env" });

app.use("/resources", express.static("public"));
app.use("/resources", express.static(__dirname + "/public"));

//establecemos el motor de plantillas
app.set("view engine", "ejs");

//
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


//aqui estan las rutas de la pagina

app.get("/", (req, res) => {
  res.render("index",{msg: 'Esto es un mensaje desde NodeJS'});
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});


app.listen(3000, (req, res) => {
  console.log("Server Runing in http://localhost:3000");
});
