import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactFooter = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="relative bg-white">
      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#004225] to-[#0a5a38] p-8 text-white shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Stay informed</div>
              <h3 className="mt-2 font-serif text-2xl font-semibold">Subscribe to our newsletter</h3>
              <p className="mt-1 text-white/80">Get updates on projects, events, and opportunities to participate.</p>
            </div>
            <form onSubmit={(e)=>{e.preventDefault();}} className="flex items-center gap-3">
              <input type="email" required placeholder="Your email address" className="w-full flex-1 rounded-md border-0 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              <button className="rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#004225] transition hover:bg-[#c7a22f]">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Get in touch</div>
            <h2 className="font-serif text-3xl font-bold text-[#004225] sm:text-4xl">Contact the Office of the Deputy Governor</h2>
            <p className="mt-3 text-gray-600">Reach out for inquiries, partnerships, or collaborations.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                  <input name="name" value={form.name} onChange={onChange} required className="w-full rounded-md border border-gray-200 px-4 py-3 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full rounded-md border border-gray-200 px-4 py-3 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                  <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-md border border-gray-200 px-4 py-3 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={4} required className="w-full rounded-md border border-gray-200 px-4 py-3 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30" />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <button className="rounded-md bg-[#004225] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00341d]">Send Message</button>
                {sent && <span className="text-sm text-green-600">Message submitted! We will get back to you.</span>}
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
            >
              <h3 className="font-serif text-2xl font-semibold text-[#004225]">Office Information</h3>
              <p className="mt-3 text-gray-700">
                Office of the Deputy Governor,<br />
                Government House, Benin City, Edo State, Nigeria.
              </p>
              <div className="mt-4 text-sm text-gray-700">
                <div><span className="font-medium">Email:</span> contact@dennisidahosa.ng</div>
                <div className="mt-1"><span className="font-medium">Phone:</span> +234-XXX-XXX-XXXX</div>
              </div>
              <div className="mt-6 h-56 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1523537445-6fe5da4b1d70?q=80&w=2069&auto=format&fit=crop"
                  alt="Government House, Benin City"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <nav className="flex flex-wrap items-center gap-5 text-sm">
              <a href="#home" className="text-gray-600 hover:text-[#004225]">Home</a>
              <a href="#about" className="text-gray-600 hover:text-[#004225]">About</a>
              <a href="#projects" className="text-gray-600 hover:text-[#004225]">Projects</a>
              <a href="#media" className="text-gray-600 hover:text-[#004225]">Media</a>
              <a href="#contact" className="text-gray-600 hover:text-[#004225]">Contact</a>
            </nav>
            <div className="text-center md:text-right">
              <div className="font-serif text-lg font-semibold text-[#004225]">Dennis Idahosa – Deputy Governor of Edo State</div>
              <div className="text-sm text-gray-600">Together, We Can Make Edo Great Again.</div>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-100 pt-6 text-center text-xs text-gray-500">
            Copyright © 2025 Dennis Idahosa. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;
