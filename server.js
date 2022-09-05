//create library variable
const express = require('express');
const {Pool} = require('pg');

//create app variable
const app = express();

//create middlewares
app.use(express.json());
app.use(express.static('public'))

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
app.get('/exercise', (request, response) => {
    response.send('get all check')
//     try {
//         const showAll = await pool.query('SELECT * FROM exercise');
//         response.status(200).send(showAll.rows)
//     } catch (error) {
//         response.send(error.message);
//     }
})

// //get one
// app.get('/exercise/:id', async (request, response) => {
//     try {
//         const {id} = request.params;
//         const {rows} = await pool.query('SELECT * FROM exercise WHERE id = $1', [id]);
//         response.status(200).send(rows);
//     } catch (error) {
//         response.send(error.message);
//     }
// });


// //delete one
// app.delete('/exercise/:id', async (request, response) => {
//     try {
//         const {id} = request.params;
//         const {rows} = await pool.query('DELETE FROM exercise WHERE id = $1', [id]);
//         response.status(200).send(rows);
//     } catch (error) {
//         response.send(error.message);
//     }
// })

// //create one
// app.post('/exercise', async (request, response) => {
//     try {
//         const {id} = request.params;
//         const {name, quantity, date_made, rating} = request.body;
//         const {rows} = await pool.query('INSERT INTO exercise (name, quantity, date_made, rating) VALUES ($1, $2, $3, $4)', [name, quantity, date_made, rating]);
//         const showOne = await pool.query('SELECT * FROM exercise WHERE id = $1', [id]);
//         //console.log(rows)
//         response.status(200).send(showOne.rows);
//     } catch (error) {
//         response.send(error.message);
//     }
// });

// //patch one
// app.patch('/exercise/:id', async (request, response) => {
//     try {
//         const {id} = request.params;
//         const {name, quantity, date_made, rating} = request.body;
//         const {rows} = await pool.query('UPDATE exercise SET name = $1, quantity = $2, date_made = $3, rating = $4 WHERE id = $5', [name, quantity, date_made, rating, id]);
//         const showOne = await pool.query('SELECT * FROM exercise WHERE id = $1', [id]);
//         //console.log(rows)
//         response.status(200).send(showOne.rows);
//     } catch (error) {
//         response.send(error.message);
//     }
// })

//create listening port
app.listen(PORT, () => {
    console.log(`${PORT} check`)
})