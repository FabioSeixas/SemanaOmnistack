const connection = require("../database/connection.js")

module.exports = {

  async create(req, res) {
    const {title, description, value} = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,            // Observar que não foi necessário criar a 
      value,                  // coluna "id" referente ao incidente, porque
      ong_id                  // no código da criação da tabela no DB essa
    });                       // coluna é criada automaticamente ("increment").
                              // Logo, ela estará disponível de qualquer jeito.
    return res.json({ id });
  },

  async index(req, res) {
    const { page = 1} = req.query;

    const [count] = await connection("incidents")   // Aqui é para salvar a quantidade total
      .count();                                     // de casos existentes na plataforma

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")  // Join: Fazer join com tabela "ongs"
      .limit(5)                                          // onde a coluna "id" da tabela "ongs"
      .offset((page - 1) * 5)                            // sejam iguais aos da coluna "ong_id"
      .select([                                          // da tabela "incidents" (GENIAL!)   
        "incidents.*",
        "ongs.name",
        "ongs.email",         // Aqui é para retornar colunas específicas
        "ongs.whatsapp",      // de cada tabela
        "ongs.city",
        "ongs.uf"]);

    res.header("X-Total-Count", count["count(*)"]);  // Aqui é para retornar no header da resposta
                                                     // o valor de "count" que salvamos anteriormente
    return res.json(incidents);
  },

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const indicent = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (indicent.ong_id != ong_id) {
      return res.status(401).json({ error: "Operation not permitted"});
    }

    await connection("incidents").where("id", id).delete();

    return res.status(204).send();
  }
}