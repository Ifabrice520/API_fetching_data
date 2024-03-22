import mysql2 from "mysql2";
import express from "express";


const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "application"
});

const app = express();

const PORT = "5000";

app.listen(PORT, () => 
    console.log(`it's running on https://localhost${PORT}`),
    connection.connect((err) => {
        if(err) throw err;
        console.log('database connected');
    })
)

app.use('/all', (req,res) => {
    const sql = `SELECT * FROM hold`;
    connection.query(sql, (err,result) => {
        if(err) throw err;
        res.send(result);
    })
})