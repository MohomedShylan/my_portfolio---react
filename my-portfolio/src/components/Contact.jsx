
import React, { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mrpepyyq";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Too many requests. Please try again later."
          );
        }
        throw new Error(
          "Failed to send message. Please try again."
        );
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2>Get in touch</h2>
        <p>Do you have a project in your mind, contact me here</p>
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Info Card */}
        <div className="contact-info-card">
          <h3>Find Me ⤵</h3>

          <div className="info-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>

            <a href="mailto:mohomadshylan2003@gmail.com">
              Email: mohomadshylan2003@gmail.com
            </a>
          </div>

          <div className="info-item">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>

            <a href="tel:+94767657422">
              Tel: +94 76 7657 422
            </a>
          </div>
        </div>

        {/* Right Side: Functional Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Your name"
              autoComplete="name"
              required
              maxLength={100}
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Your email"
              autoComplete="email"
              required
              className="form-input"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            aria-label="Your message"
            rows="6"
            required
            maxLength={5000}
            className="form-textarea"
          />

          <button
            type="submit"
            className="btn-send"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}

            {!isSending && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            )}
          </button>

          {status.message && (
            <p
              className={`form-status ${status.type}`}
              role={status.type === "error" ? "alert" : "status"}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
