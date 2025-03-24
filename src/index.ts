import fastify from "fastify";
import cors from "@fastify/cors"

import { productsRoutes } from "./routes/productsRoutes";
import { mercadopagoRoutes } from "./routes/mercadopagoRoutes";

const app = fastify();
app.register(cors)
app.register(productsRoutes)
app.register(mercadopagoRoutes)

app.listen({port: 3333},() => {console.log(`server on`)});
