
import { FastifyInstance } from "fastify";
import { MercadoPagoConfig, Payment } from "mercadopago";
import { client } from "../prisma/client";

const mercadoPagoConfig = new MercadoPagoConfig({
  accessToken: String(process.env.MERCADO_PAGO_ACCESS_TOKEN)
});

const payment = new Payment(mercadoPagoConfig);

export const mercadopagoRoutes = async(app:FastifyInstance) => {
    app.post("/criar/pagamento", async (req, res) => {
      const {id, email}:any = req.body
      console.log(email + " - "+id)
        try {
          const productId = await client.product.findUnique({where:{id}})
          const userEmail = await client.user.findUnique({where:{email}})
          if(productId?.valor == null)
            return res.status(500).send({error: "Id do Produto é null"})
          const pg = await payment.create({
            body: {
              payment_method_id: "pix",
              transaction_amount: Number(productId?.valor),
              payer:{
                email:String(userEmail?.email)
              }
            },
            
          });
          res
            .status(201)
            .send({
              ticket_url: pg.point_of_interaction?.transaction_data?.ticket_url,
            });
        } catch (error) {
          res.status(500).send(error);
        }
      });
}