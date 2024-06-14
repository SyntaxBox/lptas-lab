import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import * as nodemailer from "nodemailer";
import { redirect } from "next/navigation";

const transporter = nodemailer.createTransport({
  // secure: true,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? +process.env.SMTP_PORT : 587,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

function Contact() {
  const createAccount = async (formData: FormData) => {
    "use server";
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    if (!name || !email || !message) redirect("/contact?sent=false");
    const formattedDate = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    try {
      console.log("hello");
      await transporter.sendMail({
        to: "best4ah@gmail.com",
        from: process.env.SMTP_USERNAME,
        subject: `Un neveu LPTAS Message -- ${Date.now()}`,
        text: `ENVOYER PAR: ${name}\nEMAIL: ${email}\n\nLE MESSAGE: \n${message}\nLE: ${formattedDate}
          `,
      });
    } catch (error) {
      console.log(error);
      redirect("contact?sent=false");
    }
    redirect("contact?sent=true");
  };
  return (
    <form
      action={createAccount}
      className="border w-full border-slate-200 p-4 flex flex-col gap-3"
    >
      <FormControl isRequired as="fieldset">
        <FormLabel as="legend">Voter address email</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl isRequired as="fieldset">
        <FormLabel>Votre nom</FormLabel>
        <Input minLength={5} name="fullName" />
      </FormControl>
      <FormControl isRequired as="fieldset">
        <FormLabel>Le message</FormLabel>

        <Textarea rows={5} minLength={100} size="md" name="message" />
      </FormControl>
      <Button type="submit">Envoyer</Button>
    </form>
  );
}

export default Contact;
