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
    // Send to Formspree
    const res = await fetch(
      `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (!res.ok) {
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
    return {
      success: false,
      message: "Server error occurred.",
    };
  }
}