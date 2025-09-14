import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import lavLogo from '@/assets/lav-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={lavLogo} 
                alt="LAV Company Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-foreground dark:text-white">LAV</span>
            </div>
            <p className="text-muted-foreground dark:text-gray-400 mb-6 max-w-md leading-relaxed">
              LAV Company is dedicated to connecting compassionate hearts with animals in need. 
              Through OneBowl, we're making animal welfare accessible, transparent, and impactful.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors dark:bg-gray-800 dark:hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors dark:bg-gray-800 dark:hover:bg-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors dark:bg-gray-800 dark:hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/how-it-works", label: "How It Works" },
                { to: "/impact", label: "Our Impact" },
                { to: "/about", label: "About Us" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground dark:text-gray-400 mt-0.5" />
                <a 
                  href="mailto:onebowl.lav@gmail.com" 
                  className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  onebowl.lav@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-muted-foreground dark:text-gray-400 mt-0.5" />
                <div className="flex flex-col leading-tight">
                  <a href="tel:+919953048059" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                    9953048059
                  </a>
                  <a href="tel:+919871050724" className="text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors">
                    9871050724
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground dark:text-gray-400 mt-0.5" />
                <span className="text-muted-foreground dark:text-gray-400">
                  New Delhi, Delhi<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <span className="text-muted-foreground dark:text-gray-400">
              © {currentYear} LAV Company. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border dark:border-gray-800 text-center">
            <p className="text-sm text-muted-foreground dark:text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for animals everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
