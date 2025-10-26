import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0B0F14] text-white backdrop-blur supports-[backdrop-filter]:bg-[#0B0F14]/95">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold transition-all duration-300 group-hover:text-gold group-hover:scale-105">PlayLabs.ai</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-medium hover:text-gold transition-all duration-300 hover:scale-105">
            Home
          </Link>
          <Link to="/playbooks" className="text-sm font-medium hover:text-gold transition-all duration-300 hover:scale-105">
            Playbooks
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-gold transition-all duration-300 hover:scale-105">
            Pricing
          </Link>
          <Link to="/free-gpt" className="text-sm font-medium hover:text-gold transition-all duration-300 hover:scale-105">
            Free GPT
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-gold transition-all duration-300 hover:scale-105">
            About
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-gold transition-all duration-300 hover:scale-105">
            FAQ
          </Link>
          <Button asChild className="bg-gold text-[#0B0F14] hover:bg-gold/90 font-semibold shadow-lg hover:shadow-xl hover:glow-gold">
            <Link to="/playbooks">Browse Playbooks</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0F14]">
          <nav className="container flex flex-col gap-4 py-4 px-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-gold transition-all duration-300 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/playbooks" 
              className="text-sm font-medium hover:text-gold transition-all duration-300 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Playbooks
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium hover:text-gold transition-all duration-300 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/free-gpt" 
              className="text-sm font-medium hover:text-gold transition-all duration-300 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Free GPT
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-gold transition-all duration-300 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/faq" 
              className="text-sm font-medium hover:text-gold transition-all duration-300 hover:pl-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button asChild className="bg-gold text-[#0B0F14] hover:bg-gold/90 font-semibold shadow-lg">
              <Link to="/playbooks" onClick={() => setIsMenuOpen(false)}>
                Browse Playbooks
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
