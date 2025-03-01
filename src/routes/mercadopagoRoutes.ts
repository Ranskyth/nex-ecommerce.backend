import { FastifyInstance } from "fastify";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: String(process.env.MERCADO_PAGO_ACCESS_TOKEN),
  options: { timeout: 5000 },
});

const payment = new Payment(client);

export const mercadopagoRoutes = async(app:FastifyInstance) => {
    app.post("/criar/pagamento", async (req, res) => {
        try {
          const pg = await payment.create({
            body: {
              payment_method_id: "pix",
              transaction_amount: 27.99,
            },
          });
          res
            .status(201)
            .send({
              ticket_url: pg.point_of_interaction?.transaction_data?.ticket_url,
            });
        } catch (error) {
          res.status(500).send({ error: "error in server" });
        }
      });
}