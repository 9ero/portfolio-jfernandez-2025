import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { firstname, lastname, email, message, turnstileToken } = body as Record<string, string>;

  if (!firstname || !lastname || !email || !message || !turnstileToken) {
    return json({ error: "Missing required fields" }, 400);
  }

  // Verify Cloudflare Turnstile server-side
  const turnstileSecret = import.meta.env.TURNSTILE_SECRET_KEY;
  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: turnstileSecret, response: turnstileToken }),
  });
  const verifyData = await verifyRes.json() as { success: boolean };
  if (!verifyData.success) {
    return json({ error: "Turnstile verification failed" }, 403);
  }

  // Send email via EmailJS REST API (credentials never leave the server)
  const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: import.meta.env.EMAILJS_SERVICE_ID,
      template_id: import.meta.env.EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        fullname: `${firstname} ${lastname}`,
        email,
        message,
      },
    }),
  });

  if (!emailRes.ok) {
    return json({ error: "Failed to send email" }, 500);
  }

  return json({ success: true }, 200);
};

function json(data: unknown, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
