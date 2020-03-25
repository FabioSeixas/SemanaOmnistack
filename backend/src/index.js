const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());  // Segurança
app.use(express.json());   // Faz com que a aplicação aceite envio de 
                          // informação em formato JSON.
app.use(routes);



app.listen(3333);