import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const academyLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const admissionLinks = [
    { name: 'Student Registration', href: '#registration' },
    { name: 'Eligibility Criteria', href: '#eligibility' },
    { name: 'Fee Structure', href: '#fees' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1 - About */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-700 to-sky-800 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Kuchaman Defence Academy</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading defence coaching institute in India, dedicated to preparing aspiring candidates for NDA, NAVY, and AIRFORCE with excellence and discipline.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 bg-slate-800 hover:bg-sky-700 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Academy Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Academy</h3>
            <ul className="space-y-3">
              {academyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300  transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Admission */}
          <div>
            <h3 className="text-lg font-bold mb-4">Admission</h3>
            <ul className="space-y-3">
              {admissionLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-sky-700 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                <span>KDA Campus, Sardarshahar Road, Taranagar (Churu), Rajasthan</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-5 h-5 text-sky-700 flex-shrink-0" />
                <a href='tel:+919875272291'>+91 9875272291</a> 
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-5 h-5 text-sky-700 flex-shrink-0" />
                <span>info@rkdefenceacademy.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2026 Kuchaman Defence Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400  transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-slate-400  transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
