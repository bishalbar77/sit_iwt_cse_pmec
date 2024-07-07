
// 4 Types of APIs
// GET - get data
// POST - submit data
// UPDATE 
// DELETE

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

var cors = require('cors');

const app = express();

app.use(bodyParser.json())
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pmec_sit_iwt'
})

connection.connect(err => {
    if (err) throw err;
    console.log("Data Connected!");
});

app.get('/abc',(req, res) => {
    res.json({ message: "Data fetched"});
});

app.post('/insert_student', (req, res) => {
    const name = req.body.name;
    const insertQuery = 'INSERT INTO students (name) VALUES (' + name + ')';
    // const insertQuery = 'INSERT INTO students (name) VALUES (?)';
    connection.query(insertQuery,  (err, result) => {
        if (err) throw err;
        console.log("Data Inserted!");
    });
})

app.listen(3001, () => {
    console.log("App is rrunning!")
});