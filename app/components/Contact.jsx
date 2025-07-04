// app/components/Contact.jsx
"use client";

import React, { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    preferredMethod: "",
    captcha: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({
      ...v,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!values.name.trim()) errs.name = "Name is required";
    if (!values.email.trim()) errs.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
      errs.email = "Enter a valid email";
    if (!values.phone.trim()) errs.phone = "Phone is required";
    else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(values.phone))
      errs.phone = "Enter a valid US phone";
    if (!values.message.trim()) errs.message = "Please share what brings you here";
    if (!values.preferredTime.trim())
      errs.preferredTime = "Preferred time is required";
    if (!values.preferredMethod)
      errs.preferredMethod = "Please select a contact method";
    if (!values.captcha) errs.captcha = "Please confirm you are not a robot";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    alert("Form submitted!");
    setValues({
      name: "",
      email: "",
      phone: "",
      message: "",
      preferredTime: "",
      preferredMethod: "",
      captcha: false,
    });
    setErrors({});
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left Info Column */}
        <div className="md:w-1/2 text-[#2C4D4A] space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Office Location:</h3>
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1">Contact:</h3>
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
            <h3 className="text-xl font-bold mb-1">Office Hours:</h3>
            <p>In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-1">Session Fees:</h3>
            <p>$200 / individual session</p>
            <p>$240 / couples session</p>
          </div>
        </div>

        {/* Right Form Column */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white border border-[#2C4D4A] rounded-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-[#2C4D4A]">
            Get In Touch
          </h2>
          <p className="text-sm text-center text-[#2C4D4A]">
            Simply fill out the brief fields below and Dr. Norman will be in touch
            within one business day.
          </p>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2C4D4A]">
              Name
            </label>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded-md px-3 py-2"
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2C4D4A]">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded-md px-3 py-2"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2C4D4A]">
              Phone
            </label>
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded-md px-3 py-2"
              placeholder="(555) 123‑4567"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2C4D4A]">
              What brings you here?
            </label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded-md px-3 py-2 h-24 resize-none"
              placeholder="How can I help you?"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Preferred Contact Time */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2C4D4A]">
              Preferred time to reach you
            </label>
            <input
              name="preferredTime"
              value={values.preferredTime}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded-md px-3 py-2"
              placeholder="e.g., Mornings, Afternoons, Evenings, Weekends"
            />
            <p className="mt-1 text-xs italic text-[#2C4D4A]">
              Let us know when you're typically available for a call or consultation
            </p>
            {errors.preferredTime && (
              <p className="mt-1 text-xs text-red-600">{errors.preferredTime}</p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-medium mb-1 text-[#2C4D4A]">
              Preferred contact method
            </label>
            <select
              name="preferredMethod"
              value={values.preferredMethod}
              onChange={handleChange}
              className="w-full border border-[#2C4D4A] rounded-md px-3 py-2"
            >
              <option value="">Select preferred method</option>
              <option value="email">Email</option>
              <option value="phone">Number</option>
            </select>
            {errors.preferredMethod && (
              <p className="mt-1 text-xs text-red-600">
                {errors.preferredMethod}
              </p>
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#2C4D4A] text-white py-3 rounded-md font-semibold hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
