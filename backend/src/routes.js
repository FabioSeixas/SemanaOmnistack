const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

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

routes.post("/ongs", celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),      // é uma string e é obrigatória
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get("/incidents", celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post("/incidents", IncidentController.create);

routes.delete("/incidents/:id", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

routes.get("/profile", celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()}), ProfileController.index);



module.exports = routes;


// Sobre [Segments]:
// Quando criar um objeto ("{}") e uma chave for uma variável do JS,
// é preciso usar colchetes por volta. Ex: { [key]: "value" }. "key",
// nesse caso, é uma variável do JS.


// Segments.HEADERS
// syntax para validar header é diferente de BODY
// Segundo Diego, várias propriedades são enviadas via headers
// independente de enviarmos alguma por esse caminho. Dessa forma,
// usamos o "unknown" para que nossa validação não procure checar
// essas outras propriedades.