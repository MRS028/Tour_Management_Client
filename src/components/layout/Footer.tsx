import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">TourPro</h2>
          <p className="text-sm">
            Explore the world with us. We provide the best packages and unforgettable experiences for travelers worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-teal-400">Home</a></li>
            <li><a href="/destinations" className="hover:text-teal-400">Destinations</a></li>
            <li><a href="/packages" className="hover:text-teal-400">Packages</a></li>
            <li><a href="/about" className="hover:text-teal-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16}/> Dhaka, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone size={16}/> +880 1234 567 890</li>
            <li className="flex items-center gap-2"><Mail size={16}/> support@tourpro.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="www.facebook.com" className="hover:text-teal-400"><Facebook /></a>
            <a href="www.instagram.com" className="hover:text-teal-400"><Instagram /></a>
            <a href="www.twitter.com" className="hover:text-teal-400"><Twitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-800 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} TourPro. All Rights Reserved.
      </div>
    </footer>
  );
}
