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
    <div className="min-h-screen text-[#5D4D78] flex flex-col items-center px-4 py-16 md:py-24">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl text-[#4E3F68] font-semibold tracking-tight mb-1">Contact Us</h1>
          <p className="text-sm text-muted-foreground">Send us a message</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register("name")}
              type="text"
              id="name"
              required
              minLength={2}
              className="w-full px-3 py-2 rounded-lg border border-[#CFC9DA] bg-white text-[#5D4D78] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 rounded-lg border border-[#CFC9DA] bg-white text-[#5D4D78] focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              {...register("message")}
              id="message"
              required
              minLength={10}
              rows={4}
              className="w-full px-3 py-2 rounded-lg border border-[#CFC9DA] bg-white text-[#5D4D78] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-2 px-4 bg-[#4E3F68] text-white rounded-lg font-medium hover:bg-[#4E3F68]/90 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <div className="px-4 py-3 rounded-lg border border-green-200 bg-green-50">
            <p className="text-sm text-green-600">Message sent successfully!</p>
          </div>
        )}

        {status === "error" && !Object.keys(errors).length && (
          <div className="px-4 py-3 rounded-lg border border-red-200 bg-red-50">
            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
          </div>
        )}
      </div>
    </div>
  );
}