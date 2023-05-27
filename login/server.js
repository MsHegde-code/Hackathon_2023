const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configure MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL server: ', err);
        return;
    }
    console.log('Connected to MySQL server');
});


app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    connection.query(sql, (err, result) => {
        if (err)
            throw err;
        console.log(result);
        res.send('Db created...');
    });
});

// Handle form submissions
app.post('/submit', (req, res) => {
    // Extract form data from the request body
    const { email, usn, pass } = req.body;

    // Perform a MySQL query to insert the form data into a table
    const query = `INSERT INTO form_data (email, usn, pass) VALUES (?, ?, ?)`;
    connection.query(query, [email, usn, pass], (err, result) => {
        if (err) {
            console.error('Error executing MySQL query: ', err);
            res.sendStatus(500);
            return;
        }
        console.log('Form data inserted successfully');
        res.sendStatus(200);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
