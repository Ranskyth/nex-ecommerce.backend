import { FastifyInstance } from "fastify";
import { client } from "../prisma/client";

export const userRoutes = (app: FastifyInstance) => {
  app.post("/create/user", async (req, res) => {
    try {
      const { endereco, compra, nome, password, email }: any = req.body;
      const db = await client.user.create({
        data: { email, nome, password, compra, endereco },
      });
      return res.status(200).send(db.id);
    } catch (error) {
      return res.status(500).send(error);
    }
  });
};
