import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';

const services = [
  'Plumbing Solutions',
  'Electrical Services',
  'PAT Testing',
  'Welding & Fabrication',
  'Other / General Enquiry',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const SERVICE_ID = 'service_7gfmw86';
const TEMPLATE_ID = 'template_vrcsrdk';
const PUBLIC_KEY = '37YjOuTIxrAWLakAm';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.service) e.service = 'Please select a service.';
    if (!form.message.trim()) {
      e.message = 'Please enter your message.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message must be at least 10 characters.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const messageWithService = form.service
        ? `Service: ${form.service}\n\nMessage:\n${form.message}`
        : form.message;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          message: messageWithService,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputBase = `w-full px-4 py-3 rounded-xl border text-sm font-medium transition-colors outline-none focus:ring-2 focus:ring-blue-500/25 ${
    darkMode
      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white'
  }`;

  const contactCards = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 7393 264576',
      href: 'tel:+447393264576',
      sub: 'Available 24/7 — Emergency Callouts',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@srengineeringdudleyltd.co.uk',
      href: 'mailto:info@srengineeringdudleyltd.co.uk',
      sub: 'We reply within 1 business day',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Unit 6, Castlegate Way, Castle Court 2, Dudley, DY1 4RH',
      href: null,
      sub: 'United Kingdom',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Available 24 Hours a Day, 7 Days a Week',
      href: null,
      sub: 'Emergency Callouts Available',
    },
  ];

  return (
    <div className={darkMode ? 'bg-gray-900' : 'bg-white'}>
      <PageHeader
        title="Contact"
        highlight="Us"
        subtitle="Available 24/7 for emergency callouts and project enquiries across the West Midlands."
        image="https://images.pexels.com/photos/8961064/pexels-photo-8961064.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
        darkMode={darkMode}
      />

      <section className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-5">
              <ScrollReveal>
                <div className="reveal opacity-0 mb-6">
                  <h2 className={`text-2xl sm:text-3xl font-black mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Get in <span className="text-blue-600">Touch</span>
                  </h2>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Use the form to send us an enquiry and we'll get back to you as soon as possible. For emergencies, call us directly — we're available 24/7.
                  </p>
                </div>

                {contactCards.map((c) => (
                  <div
                    key={c.label}
                    className={`reveal opacity-0 flex items-start gap-4 p-4 rounded-xl border transition-all hover:-translate-y-0.5 ${
                      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100 hover:shadow-md'
                    }`}
                  >
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <c.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className={`text-sm font-semibold hover:text-blue-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{c.value}</p>
                      )}
                      <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{c.sub}</p>
                    </div>
                  </div>
                ))}

                <div className="reveal opacity-0 mt-2 p-5 rounded-2xl bg-blue-600 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider">Emergency Service</span>
                  </div>
                  <p className="font-black text-lg leading-tight mb-1">24/7 Emergency Callouts</p>
                  <p className="text-blue-100 text-sm mb-3">
                    Available around the clock for urgent plumbing, electrical, and engineering emergencies.
                  </p>
                  <a
                    href="tel:+447393264576"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Phone size={14} />
                    Call Now: +44 7393 264576
                  </a>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal className="lg:col-span-3">
              <div
                className={`reveal opacity-0 rounded-2xl border p-6 sm:p-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}
              >
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle size={40} className="text-emerald-600" />
                    </div>
                    <h3 className={`text-2xl font-black mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Thank you!
                    </h3>
                    <p className={`text-base mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Your enquiry has been sent successfully. We'll contact you soon.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-xl transition-all"
                    >
                      Send Another Enquiry <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h3 className={`text-xl font-black mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Request a Free Quote
                      </h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Fill in the form and we'll get back to you promptly. For emergencies, call us directly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className={`${inputBase} ${errors.name ? 'border-red-400' : ''}`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`${inputBase} ${errors.email ? 'border-red-400' : ''}`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+44 7700 900000"
                            className={inputBase}
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Service Required <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={`${inputBase} ${errors.service ? 'border-red-400' : ''}`}
                          >
                            <option value="">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} />
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className={`block text-sm font-semibold mb-1.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Message / Project Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Please describe your project or enquiry in as much detail as possible..."
                          className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {status === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-2 text-red-700 text-sm">
                          <AlertCircle size={16} />
                          Failed to send enquiry. Please try again.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Send Enquiry
                          </>
                        )}
                      </button>

                      <p className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        Your enquiry will be sent directly to info@srengineeringdudleyltd.co.uk
                      </p>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
