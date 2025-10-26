import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export function FreeGPT() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full py-20 bg-[#1a1f2e] min-h-[60vh] flex items-center">
        <div className="container px-4">
          <Card className="max-w-2xl mx-auto text-center border-2 border-green">
            <CardHeader>
              <div className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-green" />
              </div>
              <CardTitle className="text-3xl mb-2">Check Your Email!</CardTitle>
              <CardDescription className="text-lg">
                We've sent your free AI Productivity Assistant to <strong>{email}</strong>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue/5 border border-blue/20 rounded-lg p-6 text-left">
                <h3 className="font-semibold text-white mb-3">Next Steps:</h3>
                <ol className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">1.</span>
                    <span>Check your inbox (and spam folder)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">2.</span>
                    <span>Download the GPT instructions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">3.</span>
                    <span>Import into ChatGPT and start using!</span>
                  </li>
                </ol>
              </div>
              
              <div className="pt-6 border-t">
                <p className="text-gray-400 mb-4">
                  Want access to ALL our expert-built GPT assistants?
                </p>
                <Button asChild size="lg" className="bg-gold text-[#0B0F14] hover:bg-gold/90">
                  <a href="/playbooks">
                    Browse All Playbooks <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B0F14] to-gray-900 text-white py-20 md:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="h-10 w-10 text-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Get Your Free AI Productivity Assistant
            </h1>
            <p className="text-xl text-gray-300">
              Experience the power of custom GPT assistants with our free productivity tool. 
              No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#1a1f2e]">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Get Instant Access</CardTitle>
                <CardDescription className="text-base">
                  Enter your details below and we'll send you the free AI Productivity Assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gold text-[#0B0F14] hover:bg-gold/90"
                  >
                    Get Free Access <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-center text-gray-400">
                    By submitting, you agree to receive emails from PlayLabs.ai. Unsubscribe anytime.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">
                What You'll Get
              </h2>
              <p className="text-xl text-gray-400">
                Your free AI Productivity Assistant includes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-[#1a1f2e] p-6 rounded-lg border border-gray-800">
                <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Email Management</h3>
                  <p className="text-gray-400">Automatically prioritize and draft responses to your emails</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#1a1f2e] p-6 rounded-lg border border-gray-800">
                <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Task Planning</h3>
                  <p className="text-gray-400">Create optimized daily schedules and to-do lists</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#1a1f2e] p-6 rounded-lg border border-gray-800">
                <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Meeting Summaries</h3>
                  <p className="text-gray-400">Generate concise summaries and action items from meetings</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#1a1f2e] p-6 rounded-lg border border-gray-800">
                <CheckCircle className="h-6 w-6 text-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Quick Research</h3>
                  <p className="text-gray-400">Get fast, accurate information on any topic</p>
                </div>
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
              Want More AI Power?
            </h2>
            <p className="text-xl text-gray-300">
              Unlock 24+ expert-built GPT assistants across 6 specialized Playbooks
            </p>
            <Button asChild size="lg" className="bg-gold text-[#0B0F14] hover:bg-gold/90 text-lg px-8">
              <a href="/playbooks">
                Explore All Playbooks <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
