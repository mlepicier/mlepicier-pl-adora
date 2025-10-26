import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-[#0B0F14] text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">PlayLabs.ai</h3>
            <p className="text-sm text-gray-400">
              Turn AI Into Your Unfair Advantage.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Home
              </Link>
              <Link to="/playbooks" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Playbooks
              </Link>
              <Link to="/pricing" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Pricing
              </Link>
              <Link to="/free-gpt" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Free GPT
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-gray-400 hover:text-gold transition-colors">
                About
              </Link>
              <Link to="/faq" className="text-sm text-gray-400 hover:text-gold transition-colors">
                FAQ
              </Link>
              <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-gold transition-colors">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-gray-400">
              Get your free weekly AI Productivity Tip
            </p>
            <Link 
              to="/newsletter" 
              className="inline-block text-sm bg-gold text-[#0B0F14] px-4 py-2 rounded-md hover:bg-gold/90 transition-colors font-medium"
            >
              Subscribe
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PlayLabs.ai. All rights reserved.</p>
          <p className="mt-2">Powered by Stripe • Shopify • Whop</p>
        </div>
      </div>
    </footer>
  );
}
