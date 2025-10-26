import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Users, Rocket } from 'lucide-react';

export function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B0F14] to-gray-900 text-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              About PlayLabs.ai
            </h1>
            <p className="text-2xl text-gray-300">
              We build the tools to turn AI into everyday leverage
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  PlayLabs.ai was born from a simple observation: AI is powerful, but most people 
                  don't know where to start. ChatGPT and similar tools have incredible potential, 
                  but without the right prompts, structure, and guidance, that potential goes untapped.
                </p>
                <p>
                  We created PlayLabs.ai to change that. Our mission is to make AI accessible, 
                  practical, and immediately useful for everyone — from busy professionals to 
                  entrepreneurs, students, and lifelong learners.
                </p>
                <p>
                  Each Playbook is carefully crafted by experts who understand both the technology 
                  and the real-world challenges people face. We don't just give you prompts — we 
                  give you complete GPT assistants that are ready to use, tested, and optimized 
                  for results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a1f2e]">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">What We Believe</h2>
              <p className="text-xl text-gray-400">
                Our core values guide everything we create
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#0B0F14] p-6 rounded-xl space-y-4 border border-gray-800">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-white">Expert Quality</h3>
                <p className="text-gray-400">
                  Every GPT is built by experts and tested for real-world effectiveness
                </p>
              </div>

              <div className="bg-[#0B0F14] p-6 rounded-xl space-y-4 border border-gray-800">
                <div className="w-14 h-14 bg-green/10 rounded-full flex items-center justify-center">
                  <Zap className="h-7 w-7 text-green" />
                </div>
                <h3 className="text-xl font-semibold text-white">Instant Value</h3>
                <p className="text-gray-400">
                  No setup complexity. Download, import, and start getting results immediately
                </p>
              </div>

              <div className="bg-[#0B0F14] p-6 rounded-xl space-y-4 border border-gray-800">
                <div className="w-14 h-14 bg-purple/10 rounded-full flex items-center justify-center">
                  <Users className="h-7 w-7 text-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white">User-Centric</h3>
                <p className="text-gray-400">
                  Designed for real people solving real problems, not tech enthusiasts
                </p>
              </div>

              <div className="bg-[#0B0F14] p-6 rounded-xl space-y-4 border border-gray-800">
                <div className="w-14 h-14 bg-blue/10 rounded-full flex items-center justify-center">
                  <Rocket className="h-7 w-7 text-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white">Continuous Growth</h3>
                <p className="text-gray-400">
                  Regular updates and improvements keep you at the cutting edge
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Our Vision</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  We're just getting started. PlayLabs.ai isn't just about Playbooks — it's about 
                  building a complete ecosystem where AI becomes your personal productivity layer.
                </p>
                <p className="font-semibold text-white">What's Next:</p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-3">→</span>
                    <span><strong>AI Collaboration Tools</strong> — Team workspaces where GPTs work together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">→</span>
                    <span><strong>Automation Integrations</strong> — Connect with n8n, Zapier, and more</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">→</span>
                    <span><strong>Custom GPT Builder</strong> — Create your own assistants with our framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3">→</span>
                    <span><strong>Industry Partnerships</strong> — Specialized Playbooks for specific professions</span>
                  </li>
                </ul>
                <p>
                  Our goal is simple: make AI accessible, useful, and transformative for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F14] to-gray-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Join Our Journey
            </h2>
            <p className="text-xl text-gray-300">
              Be part of the AI revolution. Start with any Playbook and experience 
              the power of expert-built GPT assistants.
            </p>
            <Button asChild size="lg" className="bg-gold text-[#0B0F14] hover:bg-gold/90 text-lg px-12">
              <Link to="/playbooks">
                Browse Playbooks
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
