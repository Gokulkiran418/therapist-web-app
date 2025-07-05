"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredTime: string;
  preferredMethod: string;
  captcha: boolean;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
    captcha: false,
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      // Safe cast: only checkboxes have `checked`
      const checked = (e.target as HTMLInputElement).checked;
      setValues((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!values.name.trim()) errs.name = "Name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errs.email = "Enter a valid email";
    if (!values.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone))
      errs.phone = "Enter a valid US phone";
    if (!values.message.trim())
      errs.message = "Please share what brings you here";
    if (!values.preferredTime.trim())
      errs.preferredTime = "Preferred time is required";
    if (!values.preferredMethod)
      errs.preferredMethod = "Please select a contact method";
    if (!values.captcha) errs.captcha = "Please confirm you are not a robot";
    if (!values.consent) errs.consent = "You must agree to be contacted";

    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredTime: "",
      preferredMethod: "",
      captcha: false,
      consent: false,
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="bg-teal-100 py-12 px-4 scroll-mt-16" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Info Column */}
        <div className="md:w-1/2 text-[#2C4D4A] space-y-4 text-sm">
          <div>
            <h3 className="text-lg font-bold mb-1">Office Location:</h3>
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-1">Contact:</h3>
            <p>Phone: (323) 555-0192</p>
            <p>
              Email:{" "}
              <a
                href="mailto:serena@blakepsychology.com"
                className="text-blue-700 underline"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-1">Office Hours:</h3>
            <p>In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-1">Session Fees:</h3>
            <p>$200 / individual session</p>
            <p>$240 / couples session</p>
          </div>
        </div>

        {/* Right Form Column */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[400px] bg-white border border-[#2C4D4A] rounded-lg p-6 space-y-4 text-sm"
        >
          <h2 className="text-xl font-bold text-center text-[#2C4D4A]">
            Get In Touch
          </h2>
          <p className="text-xs text-center text-[#2C4D4A]">
            Fill out the fields below and Dr. Blake will respond within one
            business day.
          </p>

          {/* Name */}
          <div>
            <label className="block font-medium mb-1 text-[#2C4D4A]">Name</label>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded px-2 py-1"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1 text-[#2C4D4A]">Email</label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded px-2 py-1"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1 text-[#2C4D4A]">Phone</label>
            <input
              name="phone"
              value={values.phone}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/[^\d()]/g, "");
                setValues((prev) => ({ ...prev, phone: cleaned }));
              }}
              className="w-full border border-[#2C4D4A] rounded px-2 py-1"
              placeholder="(555)123‑4567"
            />
            {errors.phone && (
              <p className="text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium mb-1 text-[#2C4D4A]">
              What brings you here?
            </label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded px-2 py-1 h-20 resize-none"
              placeholder="How can I help you?"
            />
            {errors.message && (
              <p className="text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block font-medium mb-1 text-[#2C4D4A]">
              Preferred time to reach you
            </label>
            <input
              name="preferredTime"
              value={values.preferredTime}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded px-2 py-1"
              placeholder="e.g. Mornings"
            />
            <p className="text-xs italic text-[#2C4D4A] mt-1">
              Let us know when you're available
            </p>
            {errors.preferredTime && (
              <p className="text-xs text-red-600">{errors.preferredTime}</p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block font-medium mb-1 text-[#2C4D4A]">
              Preferred contact method
            </label>
            <select
              name="preferredMethod"
              value={values.preferredMethod}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded px-2 py-1"
            >
              <option value="">Select method</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            {errors.preferredMethod && (
              <p className="text-xs text-red-600">{errors.preferredMethod}</p>
            )}
          </div>

          {/* Captcha */}
          <div className="flex items-center space-x-2">
            <input
              id="captcha"
              name="captcha"
              type="checkbox"
              checked={values.captcha}
              onChange={handleChange}
              className="h-4 w-4 text-[#2C4D4A] border-gray-300 rounded"
            />
            <label htmlFor="captcha" className="text-sm text-[#2C4D4A]">
              I'm not a robot
            </label>
          </div>
          {errors.captcha && (
            <p className="text-xs text-red-600">{errors.captcha}</p>
          )}

          {/* Consent */}
          <div className="flex items-center space-x-2 mt-4">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={handleChange}
              className="h-4 w-4 text-[#2C4D4A] border-gray-300 rounded"
            />
            <label htmlFor="consent" className="text-sm text-[#2C4D4A]">
              I agree to be contacted
            </label>
          </div>
          {errors.consent && (
            <p className="text-xs text-red-600">{errors.consent}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#2C4D4A] text-white py-2 rounded-md font-semibold hover:bg-green-800 transition"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-center text-sm mt-2">
              Thank you! Your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
