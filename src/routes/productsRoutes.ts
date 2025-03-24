import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

import { client } from "../prisma/client";
import { createProduct } from "../controller/productController";

export const productsRoutes = async (app: FastifyInstance) => {
  app.get("/products", async (req, res) => {

    try{
      const db = await client.product.findMany();

      return res.status(200).send(db);
    }
    catch{
      res.status(500).send({msg: "Error"})
    }})
  app.get("/products/:id", async (req, res) => {
    const { id }:any = req.params;

    const db = await client.product.findUnique({where:{id}})

    return res.status(200).send(db);
  });
  app.post("/products", createProduct)
};
