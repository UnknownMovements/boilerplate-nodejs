const bodyParser = require('body-parser');
const express = require('express');
const router = require('./routes/index');
// import do controller

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router); // chamar controller e setar url base

// query string (dando exception)
// app.get("/api/v1/todos/search", (req, res) => {
//     const id = parseInt(req.query.id, 10);
//     console.log(id);
//     db.map((todo) => {
//         if(todo.id === id){
//             return res.status(200).send({
//                 success: "true",
//                 message: "todo retireved successfully",
//                 todo,
//             });
//         }
//     });
//     return res.status(404).send({
//         success: "false",
//         message: "todo does not exist"
//     });
// })

module.exports = app;
