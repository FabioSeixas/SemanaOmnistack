const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  
  beforeEach(async () => {
//  await connection.migrate.rollback();-> desfazer migrations (zerar o DB)
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();    // interrompe a conexão com o DB.
  })                               // Evita de o teste não conseguir dar exit
                                   // sozinho.
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
//    .set("Authorization", id válido)   -> Para fazer uma requisição passando 
      .send({                           //  alguma informação no HEADERS
        name: "FabioTeste",
        email: "flscost@gmail.com",
        whatsapp: "1234234132",
        city: "São Paulo",
        uf: "SP"
      })

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
    });
  });