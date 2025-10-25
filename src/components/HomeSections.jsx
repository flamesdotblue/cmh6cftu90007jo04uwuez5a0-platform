import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, GraduationCap, Hospital, Users, Building2, TrendingUp } from 'lucide-react';

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    {eyebrow && <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">{eyebrow}</div>}
    <h2 className="font-serif text-3xl font-bold text-[#004225] sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
  </div>
);

const SocialIcons = () => (
  <div className="mt-6 flex items-center justify-center gap-5">
    {[
      { Icon: Facebook, href: '#' },
      { Icon: Twitter, href: '#' },
      { Icon: Instagram, href: '#' },
      { Icon: Youtube, href: '#' },
      { Icon: Linkedin, href: '#' },
    ].map(({ Icon, href }, i) => (
      <a key={i} href={href} aria-label="Social link" className="text-gray-600 transition hover:text-[#D4AF37]">
        <Icon className="h-5 w-5" />
      </a>
    ))}
  </div>
);

const HomeSections = () => {
  const focus = [
    { icon: GraduationCap, title: 'Education Reform', desc: 'Quality, accessible education that prepares our youth for a competitive future.' },
    { icon: Hospital, title: 'Healthcare Access', desc: 'Strengthening primary healthcare and community wellness across Edo State.' },
    { icon: Users, title: 'Youth Empowerment', desc: 'Jobs, skills, and leadership opportunities for the next generation.' },
    { icon: Building2, title: 'Infrastructure Development', desc: 'Reliable roads, power, and public utilities that connect communities.' },
    { icon: TrendingUp, title: 'Economic Growth', desc: 'SME support, innovation hubs, and investment to unlock prosperity.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#004225]">
        <div
          className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1558981001-3528a9f5f3c9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-30"
          aria-hidden
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/30">
              <span className="text-[#D4AF37]">Official</span> Website
            </div>
            <h1 className="mt-5 font-serif text-4xl font-extrabold leading-tight sm:text-5xl">
              Make Edo Great Again
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              Meet Dennis, Ideological Leader for the Next Generation. Join us on a transformative journey toward a brighter, more inclusive future for all Edo citizens.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#004225] shadow-sm transition hover:bg-[#c7a22f]"
              >
                Meet Dennis
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join the Movement
              </a>
            </div>
            <SocialIcons />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-80 overflow-hidden rounded-2xl shadow-2xl sm:w-96">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1887&auto=format&fit=crop"
                alt="Dennis engaging with citizens"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#004225]/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview, Vision & Mission */}
      <section id="about" className="relative bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Meet Dennis"
            title="Ideological Leader for the Next Generation"
            subtitle="Born on 11 August 1980 in Benin City, Dennis Idahosa is best known as the leader of the youths. His dedication to inclusive governance and grassroots development reflects his vision for a better Edo State."
          />

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-[#004225]">Profile Summary</h3>
              <p className="mt-3 text-gray-700">
                Dennis Idahosa is a prominent Nigerian politician known for his dynamic leadership and commitment to public service. As a member of the House of Representatives, he has championed initiatives to improve education, healthcare, and infrastructure. His leadership emphasizes collaboration, transparency, and youth inclusion—earning him respect across political divides.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="text-gray-500">Political Ideology</div>
                  <div className="font-medium">Democratic Republican</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="text-gray-500">Religion</div>
                  <div className="font-medium">Christian</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="text-gray-500">Date of Birth</div>
                  <div className="font-medium">11 August 1980</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4">
                  <div className="text-gray-500">Born In</div>
                  <div className="font-medium">Benin City, Edo State</div>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 col-span-2">
                  <div className="text-gray-500">Best Known As</div>
                  <div className="font-medium">The Leader of the Youths</div>
                </div>
              </div>
              <a
                href="#about-full"
                className="mt-5 inline-block text-sm font-semibold text-[#004225] underline decoration-[#D4AF37]/60 underline-offset-4 hover:text-[#00341d]"
              >
                Read More → About Dennis
              </a>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-[#004225] p-6 text-white shadow-sm">
                <h3 className="font-serif text-2xl font-semibold">Vision</h3>
                <p className="mt-2 text-white/90">
                  To make Edo State a model of inclusive governance and sustainable development.
                </p>
                <h3 className="mt-6 font-serif text-2xl font-semibold">Mission</h3>
                <p className="mt-2 text-white/90">
                  To empower communities through education, economic opportunity, and transparent leadership.
                </p>
                <div className="mt-6 italic text-[#D4AF37]">“Together, we can build a stronger, united Edo State that empowers every individual.”</div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="font-serif text-2xl font-semibold text-[#004225]">Education</h3>
                <ol className="mt-4 space-y-4">
                  <li className="border-l-2 border-[#D4AF37] pl-4">
                    <div className="font-medium">Political Science – Daffodils International University, UK</div>
                    <p className="text-sm text-gray-600">Intrinsically visualize enterprise-wide action items vis-à-vis competitive results. Holistically provide access to economically sound intellectual capital with maintainable internal or “organic” sources.</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionTitle
              eyebrow="Key Focus Areas"
              title="Building a Future that Works for Everyone"
            />
            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {focus.map((f, idx) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#004225]/10 text-[#004225] group-hover:bg-[#004225]/20">
                    {React.createElement(f.icon, { className: 'h-5 w-5' })}
                  </div>
                  <h4 className="mt-4 font-serif text-xl font-semibold text-[#004225]">{f.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anchor for full about if needed */}
      <div id="about-full" />
    </div>
  );
};

export default HomeSections;
