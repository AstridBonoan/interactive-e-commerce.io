import Stripe from "https://esm.sh/stripe@17.5.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
  apiVersion: "2026-07-29.dahlia",
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await request.json();
    const items = body.items as Array<{ name: string; amount: number; quantity: number }>;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: body.email,
      success_url: body.success_url,
      cancel_url: body.cancel_url,
      integration_identifier: body.integration_identifier ?? "atelier-apartment-xxxxxxxx",
      line_items: items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.amount,
          product_data: { name: item.name },
        },
      })),
    });

    return new Response(JSON.stringify({ id: session.id, url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout failed";
    return new Response(message, { status: 400, headers: corsHeaders });
  }
});
