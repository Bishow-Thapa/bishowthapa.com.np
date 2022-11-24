const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require('mysql');

const app = express();



// connecting to the database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactdb',
})

// app
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const sqlSelect = "SELECT * FROM `movie_detail`";
    db.query(sqlSelect, (err, result) => {
        // console.log(result)
        res.send(result)
    })

    // res.send("Hello World")
})

// response to the index

app.listen(3001, ()=> {
    console.log("running on port 3001")
})