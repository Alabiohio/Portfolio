"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { type: "error", message: "All fields are required." };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Contact Form <portfolio@info.oheo.site>",
            to: ["ohioalabi@gmail.com", "ohioalabi1@gmail.com"],
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            replyTo: email,
        });

        if (error) {
            console.error("Resend API error:", error);
            return { type: "error", message: error.message };
        }

        return { type: "success", message: "Message sent successfully!" };
    } catch (err) {
        console.error("Exception in sendContactEmail:", err);
        return { type: "error", message: "Failed to send message." };
    }
}
