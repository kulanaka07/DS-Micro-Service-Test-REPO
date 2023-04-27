import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

export default function EmailSend() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n6evvsp",
        "template_ghsotz8",
        form.current,
        "6LOBZyhN6QY0b3dM3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section>
      <div>
        <h2>Contact Post</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="name" name="user_name" required />

          <input type="email" placeholder="email" name="user_email" required />
          <input type="text" placeholder="subject" name="subject" required />
          <textarea name="message" cols="30" rows="10" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
