import type { APIRoute } from "astro";
import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_APIKEY);

const emailSource = "yourmail@nombiembre.dev"; // Replace with your email and domain
const emailDestination = "emanuelt.marin9@gmail.com"; // Where you want to send the email

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  const send = await resend.emails.send({
    from: emailSource,
    to: emailDestination,
    subject: "Pictum Support",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 1000px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h1 style="color: #303030; text-align: center;">New Message Received</h1>
        <p style="font-size: 16px; margin-bottom: 20px;">
          <strong>From:</strong> ${name} (${email})
        </p>
        <p style="font-size: 16px; margin-bottom: 20px;">
          <strong>Message:</strong>
          <br>
          ${message}
        </p>
        <p style="font-size: 14px; color: #555;">
          Please review the message and respond as necessary.
        </p>
      </div>
      <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #aaa;">
        <p>Pictum Support System</p>
      </footer>
    </div>
  `,
    text: `From: ${name} (${email})\nMessage: ${message}`,
  });

  if (send.data) {
    console.log("Mail Send");
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      },
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      },
    );
  }
};
