import { FastifyInstance } from "fastify";
import { client } from "../prisma/client";

interface productsModel{
    nome:string,
    descricao:string
    quantidade:number

}


export const productsRoutes = async (app:FastifyInstance) => {
    app.get("/products", async (req, res) => {
        const data = await client.products.findMany()

        return res.status(200).send(data)
    })
    app.post("/products",async(req, res) => {
 
    })
}