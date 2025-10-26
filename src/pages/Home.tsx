import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, CheckCircle, Zap, Download, Sparkles } from 'lucide-react';
import { playbooks } from '@/lib/data';

export function Home() {
  return (
    <div className="w-full">
      {/* Launch Promo Banner */}
      <div className="bg-gold text-[#0B0F14] py-3 text-center font-semibold text-sm shadow-lg">
        🎉 Launch Promo: Buy 1, get 25% off 2nd | Buy 3, get 1 FREE!
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B0F14] to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-glow">
              AI Playbooks + GPT Assistants to Work Smarter
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-glow">
              Download expert-level Playbooks packed with ready-to-use GPTs that automate work, 
              accelerate learning, and unlock results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gold text-[#0B0F14] hover:bg-gold/90 text-lg px-8 hover:glow-gold-intense font-semibold shadow-lg">
                <Link to="/playbooks">
                  Browse Playbooks <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white border-2 hover:bg-white/10 hover:glow-gold shadow-lg">
                <Link to="/free-gpt">
                  Try a Free GPT
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                How It Works
              </h2>
              <p className="text-xl text-gray-400">
                Three simple steps to transform your productivity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-gold/20 group-hover:glow-gold group-hover:scale-110 animate-float">
                  <Download className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-white">1. Choose Playbook</h3>
                <p className="text-gray-300">
                  Select from our curated collection of AI Playbooks designed for every area of your life
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-purple/20 group-hover:glow-purple group-hover:scale-110 animate-float" style={{animationDelay: '0.5s'}}>
                  <Sparkles className="h-8 w-8 text-purple" />
                </div>
                <h3 className="text-2xl font-semibold text-white">2. Open GPTs</h3>
                <p className="text-gray-300">
                  Access your custom GPT assistants instantly — no setup required, just download and go
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-green/20 group-hover:glow-green group-hover:scale-110 animate-float" style={{animationDelay: '1s'}}>
                  <Zap className="h-8 w-8 text-green" />
                </div>
                <h3 className="text-2xl font-semibold text-white">3. Get Results</h3>
                <p className="text-gray-300">
                  Watch AI automate tasks, accelerate learning, and deliver results faster than ever
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Playbooks Section */}
      <section className="py-20 bg-[#1a1f2e]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Meet the Playbooks
              </h2>
              <p className="text-xl text-gray-400">
                Expert-built AI assistants for every aspect of your life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playbooks.map((playbook) => (
                <Card 
                  key={playbook.id} 
                  className="hover-lift hover:shadow-2xl transition-all duration-300 border-2 hover:border-opacity-50 group cursor-pointer"
                  style={{ borderColor: playbook.color }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{playbook.icon}</span>
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 group-hover:glow-gold"
                        style={{ backgroundColor: `${playbook.color}20`, color: playbook.color }}
                      >
                        {playbook.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-white">{playbook.title}</CardTitle>
                    <CardDescription className="text-base text-gray-300">
                      {playbook.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-200">Includes {playbook.gpts.length} GPTs:</p>
                      <ul className="space-y-1">
                        {playbook.gpts.slice(0, 3).map((gpt, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start">
                            <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: playbook.color }} />
                            {gpt.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2">
                    <div className="w-full flex items-center justify-between">
                      <span className="text-3xl font-bold text-white">${playbook.price}</span>
                      <Button asChild style={{ backgroundColor: playbook.color, color: '#0B0F14' }} className="hover:opacity-90 font-semibold shadow-lg hover:shadow-xl">
                        <Link to={`/playbook/${playbook.slug}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button asChild size="lg" className="bg-[#0B0F14] text-white hover:bg-[#0B0F14]/90">
                <Link to="/playbooks">
                  View All Playbooks <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why PlayLabs.ai Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Why PlayLabs.ai?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-gold/20 group-hover:glow-gold group-hover:scale-110">
                  <Sparkles className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-white">Expert-Built GPTs</h3>
                <p className="text-gray-300">
                  Every GPT is crafted by experts and tested for real-world results
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-green/20 group-hover:glow-green group-hover:scale-110">
                  <Zap className="h-8 w-8 text-green" />
                </div>
                <h3 className="text-xl font-semibold text-white">Instant Access</h3>
                <p className="text-gray-300">
                  Download immediately after purchase — no waiting, no hassle
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-purple/20 group-hover:glow-purple group-hover:scale-110">
                  <CheckCircle className="h-8 w-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">Lifetime Updates</h3>
                <p className="text-gray-300">
                  Get all future improvements and new GPTs at no additional cost
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F14] to-gray-900 text-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-glow">
              Get Your Free Weekly AI Productivity Tip
            </h2>
            <p className="text-xl text-gray-200">
              Join thousands of professionals using AI to work smarter
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white text-[#0B0F14] flex-1 border-2 border-transparent focus:border-gold transition-all duration-300 shadow-lg"
              />
              <Button type="submit" size="lg" className="bg-gold text-[#0B0F14] hover:bg-gold/90 font-semibold hover:glow-gold-intense shadow-lg">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-300">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
