import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
      alert('Thank you for contacting us! We will get back to you soon.');
    }, 1500);
  };

  const contactInfo = [
    {
      id: 1,
      icon: MapPin,
      title: 'Address',
      value: 'Kuchaman City, Rajasthan, India',
      color: 'text-red-700',
      bgColor: 'bg-red-50',
    },
    {
      id: 2,
      icon: Phone,
      title: 'Phone',
      value: '+91 (0) 1568-220-888',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email',
      value: 'info@kuchaman.edu',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
  ];

  return (
    <section id='contact' className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-8 h-8 text-sky-700" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              Get In Touch With Us
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our courses or training programs? We'd love to hear from you. Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center group hover:-translate-y-1"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${info.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{info.title}</h3>
                  <p className="text-slate-600 font-medium">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  placeholder="+91 (0) XXXXX-XXXXX"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-200 outline-none transition-all"
                  placeholder="Inquiry about courses"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-700 focus:ring-2 focus:ring-sky-200 outline-none transition-all resize-none"
                placeholder="Tell us about your inquiry..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-sky-700 hover:bg-sky-800 disabled:bg-slate-400 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 hover:shadow-lg active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin">⚙️</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center bg-white rounded-xl shadow-md p-8">
          <p className="text-slate-700 text-lg">
            Our team typically responds to inquiries within <span className="font-bold text-sky-700">24 hours</span>
          </p>
        </div>
      </div>
    </section>
  );
}
