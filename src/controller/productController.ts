import { FastifyReply, FastifyRequest } from "fastify"
import { client } from "../prisma/client"

export const createProduct = async (req:FastifyRequest, res:FastifyReply) => {
    const {nome, descricao, valor, imagem, quantidade}:any = req.body

    try{
        const isNome = await client.product.findUnique({where:{nome}})
        
        if(isNome) 
            return res.status(403).send({error: "nome do produto já existe no banco de dados"})
    
        const db = await client.product.create({data:{nome, valor, descricao,imagem,quantidade}})
        
        return res.status(201).send({id: db.id})
    }catch{
        return res.status(500).send({error: "error in server"})
    }
}