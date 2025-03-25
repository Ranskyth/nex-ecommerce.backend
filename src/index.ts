import fastify from "fastify";
import cors from "@fastify/cors"

import { productsRoutes } from "./routes/productsRoutes";
import { mercadopagoRoutes } from "./routes/mercadopagoRoutes";
import { userRoutes } from "./routes/userRoutes";

const app = fastify();
app.register(cors, {
    origin: "*",
    methods: ["GET","POST","PUT","DELETE"],
})
app.register(userRoutes)
app.register(productsRoutes)
app.register(mercadopagoRoutes)

app.listen({port: 3333},() => {console.log(`server on`)});
