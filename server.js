const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup",
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`firstname`, `lastname`, `email`, `password`, `accountType`) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,
        req.body.accountType,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
});
