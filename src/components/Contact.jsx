import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // emails
    const serviceId = "service_8ons78m";
    const templateId = "template_8awoubc";
    const publicKey = "user_F2sOkbXU6MFel9pj45ENo";

    //new object

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };
  return (
    <section className="py-28 bg-white">
      <div className="container" id="contact">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl mb-6 font-varela leading-tight tracking-tighter text-brand-dark">
              יצירת קשר
            </h2>
            <p className="text-xl text-brand-dark">
              📩 השאירו פרטים ונחזור אליכם
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg text-brand-dark text-right mb-2"
              >
                שם מלא
              </label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                id="name"
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-lg text-brand-dark text-right mb-2"
              >
                פלאפון
              </label>
              <input
                type="tel"
                value={phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg text-brand-dark text-right mb-2"
              >
                אימייל
              </label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg text-brand-dark text-right mb-2"
              >
                הודעה
              </label>
              <textarea
                name="user_message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows="4"
                placeholder="אני מעוניין ב.."
                className="w-full p-3 bg-brand-dark/5 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-brand-brown"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-brand-brown text-white py-2.5 px-6 rounded-xl text-lg font-medium hover:bg-brand-brown/90 transition-colors"
            >
              שלח
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
