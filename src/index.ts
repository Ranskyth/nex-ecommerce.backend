import fastify from "fastify";
import cors from "@fastify/cors"

import { productsRoutes } from "./routes/productsRoutes";
import { mercadopagoRoutes } from "./routes/mercadopagoRoutes";
import { authRouter } from "./routes/authRoutes";



const PORT = Number(process.env.PORT)

const app = fastify();
app.register(cors)
app.register(productsRoutes)
app.register(mercadopagoRoutes)


app.listen({port: PORT},() => {console.log(`server on in port http://0.0.0.0:${PORT}`)});
