const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SectionController = require("./controllers/SectionController");

const routes = express.Router();


/**
Tipos de parâmetros

1) Query: parametros nomeados enviados na rota após o símbolo de interrogação 
  
  Ex: "/users?name=Fabio&idade=26" -> dois filtros

  Posso acessar as queries via:
    
    const params = request.query;


2) Route Params: utilizados para identificar recursos

  Ex: No primeiro argumento da função: "/users/:id"
      No url do navegador: "/users/1"

  Posso acessar essa informação via:
    
    const params = request.query;

3) Request Body: O corpo da requisição utilizado para criar ou alterar recursos
  
  Para acessar o corpo de um POST (create) ou PUT (update):
    const body = request.body;
*/



// Routes

routes.post("/section", SectionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);



module.exports = routes;