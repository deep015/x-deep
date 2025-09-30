import React, { useState } from "react";
import { toast } from "sonner";
import Heading from "./heading";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/xyznwpkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong.");
      }
    }catch (err) {
  console.error(err); // log the actual error
  toast.error("Network error. Please try again later.");
}finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-10 flex flex-col gap-6 max-w-xl mx-auto"
    >
      <Heading>Let’s Get Connect</Heading>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name} // ✅ bind value
          onChange={handleChange}
          placeholder="Charlie"
          required
          className="shadow-aceternity rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email} // ✅ bind value
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="shadow-aceternity rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-600"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          value={formData.message} // ✅ bind value
          onChange={handleChange}
          placeholder="Write here..."
          required
          className="resize-none shadow-aceternity rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
