import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Flame,
  ClipboardCheck,
  Droplets,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: Flame,
    label: 'Welding & Fabrication',
    desc: 'Precision MIG, TIG & arc welding for structural and bespoke metalwork.',
  },
  {
    icon: ClipboardCheck,
    label: 'PAT Testing',
    desc: 'Full portable appliance testing with certification and detailed reports.',
  },
  {
    icon: Droplets,
    label: 'Plumbing Solutions',
    desc: 'Residential and commercial plumbing, boiler maintenance, and installs.',
  },
  {
    icon: Zap,
    label: 'Electrical Services',
    desc: 'NICEIC-registered electricians for rewires, fuse boards, and fit-outs.',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction Rate' },
];

const heroFeatures = [
  'Plumbing Solutions',
  'Electrical Services',
  'PAT Testing',
  'Welding & Fabrication',
];

const testimonials = [
  {
    name: 'James Holloway',
    company: 'Holloway Construction Ltd',
    rating: 5,
    review:
      'Outstanding structural welding work delivered on a tight deadline. Professional team, excellent quality.',
  },
  {
    name: 'Sarah Mitchell',
    company: 'Mitchell & Sons Property',
    rating: 5,
    review:
      'PAT testing across our entire portfolio — efficient, thorough, and the reports were exactly what our insurers required.',
  },
  {
    name: 'David Kaur',
    company: 'DK Industrial Services',
    rating: 5,
    review:
      'Emergency plumbing response within the hour. Had us back running by end of day. Exceptional service.',
  },
];

interface HomeProps {
  darkMode: boolean;
}

export default function Home({ darkMode }: HomeProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const items = hero.querySelectorAll('.hero-reveal');
    items.forEach((item, i) => {
      (item as HTMLElement).style.animationDelay = `${i * 130}ms`;
      item.classList.add('animate-fade-in-up');
    });
  }, []);

  return (
    <div className={darkMode ? 'bg-gray-900' : 'bg-white'}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Industrial engineering background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e3d]/90 via-[#0f1e3d]/75 to-[#0f1e3d]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-0 lg:py-32">
            <div>
              <div className="hero-reveal opacity-0 inline-flex items-center gap-2 border border-blue-400/30 bg-blue-600/15 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                Trusted Engineering — Dudley, West Midlands
              </div>

              <h1 className="hero-reveal opacity-0 text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.06] tracking-tight mb-6">
                Reliable Engineering <span className="text-blue-400">for a Solid</span> Future
              </h1>

              <p className="hero-reveal opacity-0 text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                SR Engineering Dudley LTD delivers expert plumbing, electrical services, PAT testing, and welding & fabrication — built on quality, safety, and reliability.
              </p>

              <div className="hero-reveal opacity-0 grid grid-cols-2 gap-2.5 mb-10 max-w-sm">
                {heroFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-gray-200 text-sm font-medium">
                    <CheckCircle size={15} className="text-blue-400 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="hero-reveal opacity-0 flex flex-col sm:flex-row gap-4">
                <NavLink
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
                >
                  Contact Us Today
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
                <a
                  href="tel:+447393264576"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>
            </div>

            <div className="hero-reveal opacity-0 hidden lg:grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
                >
                  <p className="text-4xl font-black text-white mb-1">{s.value}</p>
                  <p className="text-sm text-gray-300 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/40">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-24 lg:py-32 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Services
            </div>
            <h2
              className={`reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              Engineering Solutions <span className="text-blue-600">You Can Trust</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.label}
                className={`reveal opacity-0 group flex flex-col items-start gap-4 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50'
                    : 'bg-white border-gray-100 shadow-md hover:border-blue-200'
                }`}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors flex-shrink-0">
                  <s.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-black text-base mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {s.label}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {s.desc}
                  </p>
                </div>
                <NavLink
                  to="/services"
                  className={`mt-auto flex items-center gap-1.5 text-sm font-bold transition-colors ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Learn More <ArrowRight size={15} />
                </NavLink>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="text-center mt-10">
            <NavLink
              to="/services"
              className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20"
            >
              View All Services <ArrowRight size={18} />
            </NavLink>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-24 lg:py-32 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="reveal opacity-0 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="SR Engineering team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Why Choose SR Engineering
              </div>
              <h2
                className={`reveal opacity-0 text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Committed to <span className="text-blue-600">Excellence</span> in Every Project
              </h2>
              <p
                className={`reveal opacity-0 text-base leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Based in Dudley, we combine 15+ years of engineering expertise with a genuine commitment to quality, safety, and customer satisfaction on every project — no matter the scale.
              </p>
              <div className="reveal opacity-0 grid grid-cols-2 gap-3 mb-8">
                {[
                  'NICEIC Registered',
                  'Fully Insured',
                  'City & Guilds Qualified',
                  'Free Quotes',
                  '24/7 Emergency Cover',
                  '15+ Years Experience',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle size={15} className="text-blue-500 flex-shrink-0" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="reveal opacity-0 flex gap-4">
                <NavLink
                  to="/about"
                  className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl border-2 transition-all ${
                    darkMode
                      ? 'border-gray-600 text-white hover:border-blue-500'
                      : 'border-gray-200 text-gray-800 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  About Us <ArrowRight size={16} />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  Get a Quote
                </NavLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-24 lg:py-32 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-14">
            <div className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Client Reviews
            </div>
            <h2
              className={`reveal opacity-0 text-3xl sm:text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={`reveal opacity-0 p-6 rounded-2xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-md'}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-black">
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862142/pexels-photo-3862142.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
            alt="Engineering workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Ready to Start <span className="text-blue-300">Your Project?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Contact us today for a free, no-obligation quote. Our expert engineers are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              Request a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <a
              href="tel:+447393264576"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
            >
              <Phone size={18} /> +44 7393 264576
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
