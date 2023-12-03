const cors = require('cors');
const express = require('express');
const mysql = require(mysql2/promise);

// create app server
const app = express();

// config express static server
app.use(cors());
app.use(express.json({limit: "25mb"}));

//conexion a la base de datos

async function getConnection(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: "3993yasmin",
        database: "colegio"
    });
    connection.conect();
    return connection;
}

const port = 3000;
app.listen(port, () => {
    console.log(`servidor iniciado en http://localhost:${port}`);
});
//endpoint para todas las alumnas
app.get('/api/alumnas', async(req, res) => {
    //require - cuando  nos envian datos
    //response -para enviar 
    //1-OBETENER La conexion
    const conn = await getConnection();
    //2.-hacer la consulta- obetener todas las alumnas
    const queryAlumnas = "SELECT * FROM alumnas";

    //3.-ejecutar la consulta

    const [result]= conn.query(queryAlumnas)
    console.log(result);

    //4.-cerrar la conexion

    conn.end();

    res.json(result)
});

app.post('/api/alumnas', async(req, res) =>{
    console.log("crear alumnas");
});

//servidor de estaticos

const pathServerStatic = "./public_html";
app.use(express.static(pathServerStatic));
