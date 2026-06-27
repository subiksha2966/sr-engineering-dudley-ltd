import { NavLink } from 'react-router-dom';
import { Award, ShieldCheck, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const values = [
  {
    icon: Award,
    title: 'Quality Assured',
    desc: 'Every project meets the highest industry standards with rigorous quality control at every stage.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Full compliance with health & safety regulations. We never compromise on worker or site safety.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: 'We listen, plan, and deliver tailored solutions built entirely around your specific requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Reliable Results',
    desc: 'On-time delivery, transparent pricing, and open communication from start to finish.',
  },
];

const credentials = [
  'NICEIC Registered',
  'City & Guilds Qualified',
  'CHAS Accredited',
  'Gas Safe Registered',
  'ISO 9001 Compliant',
  'Fully Insured',
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '100%', label: 'Satisfaction Rate' },
];

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <div className={darkMode ? 'bg-gray-900' : 'bg-white'}>
      <PageHeader
        title="About"
        highlight="SR Engineering"
        subtitle="15+ years of trusted engineering expertise across the West Midlands."
        image="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        darkMode={darkMode}
      />

      <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="reveal opacity-0 relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=900&q=80"
                  alt="SR Engineering workshop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
              <div
                className={`reveal opacity-0 absolute -bottom-5 -right-5 hidden lg:flex items-center gap-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl p-5`}
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={28} className="text-white" />
                </div>
                <div>
                  <p className={`font-black text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>15+</p>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                Our Story
              </div>
              <h2
                className={`reveal opacity-0 text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Committed to <span className="text-blue-600">Excellence</span> and Innovation
              </h2>
              <p
                className={`reveal opacity-0 text-base leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Founded in Dudley, SR Engineering Dudley LTD has been delivering high-quality engineering solutions to residential, commercial, and industrial clients for over 15 years. We combine deep technical expertise with an unwavering commitment to customer satisfaction.
              </p>
              <p
                className={`reveal opacity-0 text-base leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                From complex industrial welding and fabrication to critical electrical installations and PAT compliance testing, our skilled team brings precision and professionalism to every project — no matter the scale. Our base at Unit 6, Castlegate Way, Dudley serves as a hub for engineering excellence across the West Midlands.
              </p>
              <div className="reveal opacity-0 grid grid-cols-2 gap-2.5 mb-8">
                {credentials.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle size={15} className="text-blue-500 flex-shrink-0" />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{c}</span>
                  </div>
                ))}
              </div>
              <NavLink
                to="/contact"
                className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20"
              >
                Work With Us <ArrowRight size={18} />
              </NavLink>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className={`py-24 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-xl mx-auto mb-14">
            <div className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Values
            </div>
            <h2
              className={`reveal opacity-0 text-3xl sm:text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}
            >
              The Principles That <span className="text-blue-600">Drive Us</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className={`reveal opacity-0 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-md'
                }`}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-blue-600" />
                </div>
                <h3 className={`font-black text-base mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{v.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{v.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-[#0f1e3d]'}`}>
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="reveal opacity-0 text-center">
                <p className="text-4xl sm:text-5xl font-black text-blue-400 mb-1">{s.value}</p>
                <p className="text-sm text-gray-300 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
