'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer web development, UI/UX design, and SEO optimization services tailored to your brand.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Most projects take between 2–6 weeks depending on complexity, features, and client feedback speed.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes! We offer post-launch support, maintenance, and updates to ensure your site stays modern and secure.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-gray-50 py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg shadow-sm"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-medium text-slate-800">{faq.question}</span>
                <span className="text-2xl text-indigo-500">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
