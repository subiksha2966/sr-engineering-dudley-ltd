import { NavLink } from 'react-router-dom';
import { Flame, ClipboardCheck, Droplets, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  {
    icon: Flame,
    title: 'Welding & Fabrication',
    color: 'orange',
    image: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description:
      'Precision MIG, TIG, and arc welding for structural steelwork, bespoke metal fabrication, and industrial components. Our certified welders work to exact engineering drawings with full quality control documentation.',
    features: [
      'Structural Steelwork',
      'Custom Metal Fabrication',
      'MIG / TIG / Arc Welding',
      'On-Site Welding',
      'Stainless Steel Work',
      'Certified Quality Control',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'PAT Testing',
    color: 'green',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description:
      'Comprehensive Portable Appliance Testing to ensure your electrical equipment is safe and legally compliant. We provide detailed pass/fail reports, asset registers, and full certification for insurance and regulatory purposes.',
    features: [
      'Visual Inspection',
      'Earth Continuity Tests',
      'Insulation Resistance Tests',
      'Pass/Fail Labels',
      'Full Certification',
      'Asset Register Provided',
    ],
  },
  {
    icon: Droplets,
    title: 'Plumbing Solutions',
    color: 'blue',
    image: 'https://images.pexels.com/photos/8486972/pexels-photo-8486972.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description:
      'Complete plumbing services for residential, commercial, and industrial properties. From emergency leak repairs to full bathroom installations and commercial system commissioning.',
    features: [
      'Emergency Leak Repairs',
      'Boiler Installation & Service',
      'Bathroom Fitting',
      'Central Heating',
      'Commercial Plumbing',
      'Drain Clearance',
    ],
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    color: 'yellow',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&q=80',
    description:
      'Fully qualified, NICEIC-registered electricians providing safe, reliable electrical installations across domestic, commercial, and industrial sectors. All work certified to BS7671.',
    features: [
      'Full Rewires',
      'Consumer Unit Upgrades',
      'EV Charger Installation',
      'Fault Finding',
      'Commercial Fit-Outs',
      'EICR Reports',
    ],
  },
];

const colorMap: Record<string, { iconBg: string; iconColor: string; tagBg: string; tagText: string }> = {
  orange: { iconBg: 'bg-orange-100', iconColor: 'text-orange-600', tagBg: 'bg-orange-50', tagText: 'text-orange-700' },
  green: { iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', tagBg: 'bg-emerald-50', tagText: 'text-emerald-700' },
  blue: { iconBg: 'bg-blue-100', iconColor: 'text-blue-600', tagBg: 'bg-blue-50', tagText: 'text-blue-700' },
  yellow: { iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', tagBg: 'bg-yellow-50', tagText: 'text-yellow-700' },
};

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  return (
    <div className={darkMode ? 'bg-gray-900' : 'bg-white'}>
      <PageHeader
        title="Our"
        highlight="Services"
        subtitle="Expert engineering solutions delivered with quality, safety, and reliability."
        image="https://images.pexels.com/photos/1108101/pexels-photo-1920384.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        darkMode={darkMode}
      />

      <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((s, i) => {
            const colors = colorMap[s.color];
            const isReversed = i % 2 !== 0;
            return (
              <ScrollReveal key={s.title}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? '' : ''}`}>
                  <div className={`reveal opacity-0 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div
                        className={`absolute top-5 left-5 w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center`}
                      >
                        <s.icon size={24} className={colors.iconColor} />
                      </div>
                    </div>
                  </div>

                  <div className={`reveal opacity-0 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div
                      className={`inline-flex items-center gap-2 ${colors.iconBg} ${colors.iconColor} text-sm font-semibold px-4 py-1.5 rounded-full mb-5`}
                    >
                      <s.icon size={15} />
                      {s.title}
                    </div>
                    <h2
                      className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                      {s.title}
                    </h2>
                    <p className={`text-base leading-relaxed mb-7 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {s.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 mb-8">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm font-medium">
                          <CheckCircle size={14} className="text-blue-500 flex-shrink-0" />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20"
                    >
                      Get a Quote <ArrowRight size={18} />
                    </NavLink>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <ScrollReveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`reveal opacity-0 text-3xl sm:text-4xl font-black mb-5 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Not Sure Which Service You Need?
          </h2>
          <p className={`reveal opacity-0 text-base mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Our team is happy to discuss your requirements and recommend the right solution. Contact us for a free consultation.
          </p>
          <NavLink
            to="/contact"
            className="reveal opacity-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20"
          >
            Contact Our Team <ArrowRight size={18} />
          </NavLink>
        </ScrollReveal>
      </section>
    </div>
  );
}
