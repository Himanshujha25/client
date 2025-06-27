import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Purcho</h2>
          <p className="text-sm text-white/80">
            Supplying workplace essentials with fast delivery and trusted service. Built for your business needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/returns" className="hover:underline">Returns & Refunds</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>Email: <a href="mailto:support@purcho.com" className="hover:underline">support@purcho.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></li>
            <li>Address: Alcester, UK</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-8 py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Purcho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
