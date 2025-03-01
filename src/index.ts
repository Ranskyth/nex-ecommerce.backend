import fastify from "fastify";
import fastifyCors from "fastify-cors";
import fastifyJwt from "fastify-jwt";

import { productsRoutes } from "./routes/productsRoutes";
import { mercadopagoRoutes } from "./routes/mercadopagoRoutes";

const PORT = Number(process.env.PORT)

const app = fastify();

app.register(productsRoutes)
app.register(mercadopagoRoutes)

app.listen({

  port: PORT},() => {console.log(`server on in port http://0.0.0.0:${PORT}`)});
