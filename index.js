const express = require("express");
const app = express();
const routes = require('./routes');
const path = require('path');

// FAZ O TRATAMENTO DO BODY DAS REQUISIÇÕES
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

// app.get("/testes/:id?", (req, res) => {
//   console.log(req.params);
//   const { id } = req.params;

//   if (id) {
//     res.send(`Acessou o usuario ${id}`);
//   } else {
//     res.send("acessou todos os usuarios");
//   }
// });

// app.post("/", (req, res) => {
//   console.log("Body da requisição",req.body);
//   res.send("Recebi o form");
// });

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
