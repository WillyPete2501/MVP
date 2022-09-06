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
        const {rows} = await pool.query('SELECT * FROM users WHERE log_id = $1', [id]);
        response.status(200).send(rows);
    } catch (error) {
        response.send(error.message);
    }
});


//delete one
app.delete('/users/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const {rows} = await pool.query('DELETE FROM users WHERE log_id = $1', [id]);
        response.status(200).send(rows);
    } catch (error) {
        response.send(error.message);
    }
})

//create one
app.post('/users', async (request, response) => {
    try {
        const {id} = request.params;
        const {height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4} = request.body;
        const {rows} = await pool.query('INSERT INTO users (height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4]);
        response.status(200).send(rows);
    } catch (error) {
        response.send(error.message);
    }
});

// //patch one
app.patch('/users/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const {height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4} = request.body;
        const {rows} = await pool.query('UPDATE users SET height_inches = $1, weight_lbs = $2, age = $3, exercise = $4, metric1 = $5, metric2 =$6, metric3 =$7, metric4 =$8 WHERE log_id = $9', [height_inches, weight_lbs, age, exercise, metric1, metric2, metric3, metric4, id]);
        const showOne = await pool.query('SELECT * FROM users WHERE log_id = $1', [id]);
        response.status(200).send(showOne.rows);
    } catch (error) {
        response.send(error.message);
    }
})

//create listening port
app.listen(PORT, () => {
    console.log(`${PORT} check`)
})