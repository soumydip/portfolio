"use server";

export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function sendContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const errors: FormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!email || !email.includes("@")) {
    errors.email = "Enter a valid email address";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors,
    };
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: {
          name: "Soumyadip Maity portfolio",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: "maitysoumyadip22@gmail.com",
            name: "Soumyadip",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `New portfolio message from ${name}`,
        htmlContent: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      console.error("Brevo API error:", errorData);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message: "Message sent! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Server error:", error);
    return {
      success: false,
      message: "Server error occurred.",
    };
  }
}