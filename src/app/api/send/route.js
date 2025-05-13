// src/app/api/send/route.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['sinhaatharv39@gmail.com'], // sends to yourself
      subject: subject,
      react: (
        <>
        <h1>{subject}</h1>
          <p>From: {email}</p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
