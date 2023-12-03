//importar
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

//crear el servidor
const app = express();

//configurar el servidor
app.use(cors());
app.use(express.json({ limit: "25mb" }));

//conexión a la bases de datos
async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "3993yasmin",
    database: "colegio",
  });

  connection.connect();
  return connection;
}

//iniciar el servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

//endpoint para todas las alumnas
app.get("/api/alumnas", async (req, res) => {
  //require para cuando envien datos
  //response para enviar desde el server datos al front

  //Obtener los datos de la bases de datos
  // 1. Obtener la conexion
  const conn = await getConnection();

  //. 2. Consulta que quiero a la bd: obtener todas las alumnas
  const queryAlumnas = "SELECT * FROM alumnas";

  //3. Ejecutar la consulta
  const [results, fields] = await conn.query(queryAlumnas);

  console.log(fields);
  console.log(results);

  //4. Cerra la conexión
  conn.end();
  res.json(results);
});

//endpoint para crear alumnas
app.post("/api/alumnas/add", async (req, res) => {
  console.log("crear alumna");
});
//hacer la query
const queryInsert =	`INSERT INTO Alumnas (nombre, apellidos, edad, correo_electronico) Values (?,?,?,?)`;
//hacer la conexion
const conn = await getConnection();
//ejecutar la query
const [results] = await conn.query(queryInsert, [
  req.body.nombre,
  req.body.apellidos,
  req.body.edad,
  req.body.correo_electronico,
]);

  conn.end();
  res.json({
    success: true,
    idNewStudent: results.insertId,
    message: "Se ha insertado correctamente",
  });


//servidor de estáticos
const pathServerStatic = "./public_html";
app.use(express.static(pathServerStatic));