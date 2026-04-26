"use client";

import { useForm } from "@formsdk/react";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, status },
    reset,
  } = useForm({
    action: "/api/contact",
    onSuccess: () => {
      alert("Message sent!");
      reset();
    },
  });

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Send us a message</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              {...register("name")}
              type="text"
              id="name"
              required
              minLength={2}
              className="form-input"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              required
              className="form-input"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              {...register("message")}
              id="message"
              required
              minLength={10}
              rows={4}
              className="form-input"
            />
            {errors.message && <p className="form-error">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="form-button"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <div className="form-success">
            <p className="form-success-text">Message sent successfully!</p>
          </div>
        )}

        {status === "error" && !Object.keys(errors).length && (
          <div className="form-error-global">
            <p className="form-error-global-text">Something went wrong. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}
