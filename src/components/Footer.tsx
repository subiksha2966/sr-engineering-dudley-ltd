import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const quickLinks = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact',  label: 'Contact Us' },
];

const serviceList = [
  'Plumbing Solutions',
  'Electrical Services',
  'PAT Testing',
  'Welding & Fabrication',
];

const socials = [
  { icon: Facebook,  href: 'https://www.facebook.com/share/18gsv2vFE9/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/srengineeringdudleyltd?igsh=c3g0cWoycm5xc2k1', label: 'Instagram' },
];

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={darkMode ? 'bg-gray-950 text-white' : 'bg-[#0f1e3d] text-white'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <NavLink to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/sr_logo.jpg"
                alt="SR Engineering Dudley LTD"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <p className="font-black text-base text-white">SR Engineering</p>
                <p className="text-xs text-blue-400 font-semibold leading-none">Dudley LTD</p>
              </div>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional engineering services across Dudley and the West Midlands. 
              Available 24 hours a day, 7 days a week.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-blue-300'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceList.map((s) => (
                <li key={s}>
                  <NavLink to="/services" className="text-gray-400 hover:text-blue-300 text-sm font-medium transition-colors">
                    {s}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+447393264576" className="flex items-start gap-3 text-gray-400 hover:text-blue-300 transition-colors group">
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+44 7393 264576</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@srengineeringdudleyltd.co.uk" className="flex items-start gap-3 text-gray-400 hover:text-blue-300 transition-colors group">
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm break-all">info@srengineeringdudleyltd.co.uk</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">
                    Unit 6, Castlegate Way,<br />
                    Castle Court 2, Dudley,<br />
                    DY1 4RH, United Kingdom
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} SR Engineering Dudley LTD. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
