```jsx
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
];

const services = [
  'Plumbing Solutions',
  'Electrical Services',
  'PAT Testing',
  'Welding & Fabrication',
];

const socials = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/share/18gsv2vFE9/',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/srengineeringdudleyltd?igsh=c3g0cWoycm5xc2k1',
    label: 'Instagram',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company */}
          <div>
            <NavLink to="/" className="inline-flex items-center gap-3 mb-5 group">
              <img
                src="/sr_logo.jpg"
                alt="SR Engineering Dudley LTD"
                className="h-12 w-12 object-contain rounded-lg"
              />

              <div>
                <p className="font-black text-base text-white">
                  SR Engineering
                </p>
                <p className="text-xs text-blue-400 font-semibold leading-none">
                  Dudley LTD
                </p>
              </div>
            </NavLink>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional engineering services across Dudley and the West
              Midlands. Available 24 hours a day, 7 days a week.
            </p>

            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-blue-400'
                          : 'text-gray-400 hover:text-blue-300'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-5">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <NavLink
                    to="/services"
                    className="text-gray-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    {s}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-5">
              Contact
            </h3>

            <ul className="space-y-4">

              {/* Company Phone */}
              <li>
                <a
                  href="tel:+447393264576"
                  aria-label="Call SR Engineering Dudley LTD"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-300 transition-colors group"
                >
                  <Phone
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                  />

                  <span className="text-sm">
                    +44 7393 264576
                  </span>
                </a>
              </li>

              {/* Company Email */}
              <li>
                <a
                  href="mailto:info@srengineeringdudleyltd.co.uk"
                  aria-label="Email SR Engineering Dudley LTD"
                  className="flex items-start gap-3 text-gray-400 hover:text-blue-300 transition-colors group"
                >
                  <Mail
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                  />

                  <span className="text-sm break-all">
                    info@srengineeringdudleyltd.co.uk
                  </span>
                </a>
              </li>

              {/* Address */}
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin
                    size={15}
                    className="mt-0.5 flex-shrink-0"
                  />

                  <span className="text-sm leading-relaxed">
                    Unit 6, Castlegate Way,
                    <br />
                    Castle Court 2, Dudley,
                    <br />
                    DY1 4RH, United Kingdom
                  </span>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center gap-4">

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} SR Engineering Dudley LTD.
            All Rights Reserved.
          </p>

          {/* Developer Credit */}
          <p className="text-gray-500 text-xs sm:text-sm text-center">
            <span>Designed &amp; Developed by </span>

            <a
              href="mailto:subiksharkambattu@gmail.com"
              aria-label="Email Subiksha Ramesh"
              className="relative z-50 inline-block text-blue-400 font-semibold hover:text-blue-300 hover:underline underline-offset-2 decoration-blue-400/50 transition-colors cursor-pointer"
            >
              Subiksha Ramesh
            </a>
          </p>

          {/* Policies */}
          <div className="flex gap-5">
            <span className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer">
              Privacy Policy
            </span>

            <span className="text-gray-500 hover:text-gray-300 text-xs transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
```

### The important fix 👇

Your developer link is now:

```jsx
<a
  href="mailto:subiksharkambattu@gmail.com"
  aria-label="Email Subiksha Ramesh"
  className="relative z-50 inline-block ..."
>
  Subiksha Ramesh
</a>
```

So:

* 📞 **+44 7393 264576** → company phone
* 📧 **[info@srengineeringdudleyltd.co.uk](mailto:info@srengineeringdudleyltd.co.uk)** → company email
* 👩‍💻 **Subiksha Ramesh** → `subiksharkambattu@gmail.com`

And importantly, I removed the unnecessary `onClick={(e) => e.stopPropagation()}`.

Paste this entire file into your `Footer.jsx` and test it.
