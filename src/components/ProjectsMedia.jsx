import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Edo Youth Innovation Hub',
    desc: 'A hub for skills, startups, and digital jobs empowering young innovators.',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Community Health Revamp',
    desc: 'Upgrading primary healthcare centers and community outreach programs.',
    img: 'https://images.unsplash.com/photo-1576765608639-3f56eea58c63?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Road to Progress Initiative',
    desc: 'Rehabilitation of key roads and rural access routes across Edo.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Women in Business Program',
    desc: 'Grants and mentorship to support women-owned enterprises.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Edo Digital Literacy Drive',
    desc: 'Community-based training centers for essential digital skills.',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2069&auto=format&fit=crop',
  },
];

const tabs = ['Press Releases', 'Photo Gallery', 'Videos', 'In the News'];

const ProjectsMedia = () => {
  const [activeTab, setActiveTab] = useState('Press Releases');

  return (
    <div className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">Impact</div>
          <h2 className="font-serif text-3xl font-bold text-[#004225] sm:text-4xl">Transforming Edo, One Project at a Time</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-[#004225]">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <a href="#projects" className="mt-3 inline-block text-sm font-semibold text-[#004225] underline decoration-[#D4AF37]/60 underline-offset-4 hover:text-[#00341d]">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Media Tabs */}
        <section id="media" className="mt-16 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeTab === t ? 'bg-[#004225] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === 'Press Releases' && (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <article key={i} className="rounded-lg border border-gray-100 p-4 hover:bg-gray-50">
                    <h4 className="font-serif text-lg font-semibold text-[#004225]">Press Release Title {i}</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Key updates from the Office of the Deputy Governor on governance, development, and public engagement.
                    </p>
                    <a href="#media" className="mt-2 inline-block text-sm font-semibold text-[#004225] underline decoration-[#D4AF37]/60 underline-offset-4">Read More</a>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'Photo Gallery' && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 6).map((p, i) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    <img src={p.img} alt={p.title} className="h-full w-full object-cover transition hover:scale-105" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Videos' && (
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  'https://www.youtube.com/embed/dQw4w9WgXcQ',
                  'https://www.youtube.com/embed/oHg5SJYRHA0',
                ].map((src, i) => (
                  <div key={i} className="aspect-video overflow-hidden rounded-xl">
                    <iframe
                      className="h-full w-full"
                      src={src}
                      title={`YouTube video ${i + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'In the News' && (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <article key={i} className="rounded-lg border border-gray-100 p-4 hover:bg-gray-50">
                    <h4 className="font-serif text-lg font-semibold text-[#004225]">Headline {i}</h4>
                    <p className="mt-1 text-sm text-gray-600">
                      Coverage of Dennis Idahosa’s initiatives and engagements across Edo State.
                    </p>
                    <a href="#media" className="mt-2 inline-block text-sm font-semibold text-[#004225] underline decoration-[#D4AF37]/60 underline-offset-4">Read More</a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsMedia;
