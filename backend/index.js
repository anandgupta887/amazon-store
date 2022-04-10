const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSPwlCBwfrNhRYnJYebwte65gnmCHvEUiP2qk7uFeERYgDVQYO59ELHHfnitIuBRs5wjrj9p3uRC6Ae3bIZT5LG00qJoU20kk"
);

const app = express();

app.use(cors());
// app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const id = request.query.id;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const payment = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    payment_method: id,
    confirm: true,
  });

  console.log(payment);

  // OK - Created
  response.status(201).send({
    clientSecret: payment,
  });
});

app.listen(4000, () => {
  console.log(`Example app listening on port ${4000}`);
});
