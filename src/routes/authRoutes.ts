import { FastifyInstance } from "fastify";
import fastify_jwt from "@fastify/jwt";
import { client } from "../prisma/client";

export const authRouter = (app:FastifyInstance) => {

    app.register(fastify_jwt, {secret:"aaaa"})


    app.post("/admin/signup",(req, res) => {
        const {email, password}:any = req.body
        const user = client.user.findUnique({where: {email}})
        
        if(!user) return res.status(401).send({email: "Email Não Cadastrado No DB"})


        
        const tk = app.jwt.sign({id: 1})
        return res.send({token: tk})
    })
}