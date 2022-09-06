//libraries required
const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');

//create app variable
const app = express();

//create use middlewares
app.use(express.json());
app.use(express.static('public'))
app.use(cors({origin: '*'}));

//create PORT variable
const PORT = 3003;

//create Pool variable
const pool = new Pool ({
    user: 'krono',
    password: 'f',
    host: 'localhost',
    port: 5432,
    database: 'exercise'
});

//get all
app.get('/users', async (request, response) => {
    //response.send('get all check')
    try {
        const showAll = await pool.query('SELECT * FROM users');
        response.status(200).send(showAll.rows)
    } catch (error) {
       response.send(error.message);
    }
})

//get one
app.get('/users/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const {rows} = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
        response.status(200).send(rows);
    } catch (error) {
        response.send(error.message);
    }
});


//delete one
app.delete('/users/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const {rows} = await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
        response.status(200).send(rows);
    } catch (error) {
        response.send(error.message);
    }
})

//create one
app.post('/users', async (request, response) => {
    try {
        const {id} = request.params;
        const {f_name, l_name, height_inches, weight_lbs, age} = request.body;
        const {rows} = await pool.query('INSERT INTO users (f_name, l_name, height_inches, weight_lbs, age) VALUES ($1, $2, $3, $4, $5)', [f_name, l_name, height_inches, weight_lbs, age]);
        response.status(200).send(rows);
    } catch (error) {
        response.send(error.message);
    }
});

// //patch one
app.patch('/users/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const {f_name, l_name, height_inches, weight_lbs, age} = request.body;
        const {rows} = await pool.query('UPDATE users SET f_name = $1, l_name = $2, height_inches = $3, weight_lbs = $4, age = $5 WHERE user_id = $6', [f_name, l_name, height_inches, weight_lbs, age, id]);
        const showOne = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
        response.status(200).send(showOne.rows);
    } catch (error) {
        response.send(error.message);
    }
})

//create listening port
app.listen(PORT, () => {
    console.log(`${PORT} check`)
})