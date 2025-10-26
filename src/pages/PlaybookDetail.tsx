import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowLeft, Download, Sparkles } from 'lucide-react';
import { playbooks } from '@/lib/data';

export function PlaybookDetail() {
  const { slug } = useParams<{ slug: string }>();
  const playbook = playbooks.find(p => p.slug === slug);

  if (!playbook) {
    return (
      <div className="w-full py-20 bg-[#1a1f2e]">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Playbook Not Found</h1>
            <Button asChild>
              <Link to="/playbooks">Back to Playbooks</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="py-20 md:py-32 text-white relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${playbook.color}20 0%, ${playbook.color}40 100%)`
        }}
      >
        <div className="absolute inset-0 bg-[#0B0F14]/80"></div>
        <div className="container px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6 text-white hover:text-gold">
              <Link to="/playbooks">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Playbooks
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{playbook.icon}</span>
                  <div>
                    <span 
                      className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-2"
                      style={{ backgroundColor: playbook.color, color: '#0B0F14' }}
                    >
                      {playbook.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold">{playbook.title}</h1>
                  </div>
                </div>
                <p className="text-xl text-gray-200">{playbook.description}</p>
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold">${playbook.price}</span>
                  <Button 
                    size="lg" 
                    className="text-lg px-8"
                    style={{ backgroundColor: playbook.color, color: '#0B0F14' }}
                  >
                    Get Instant Access <Download className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">What's Inside</h2>
              <p className="text-xl text-gray-400">
                {playbook.gpts.length} expert-built GPT assistants ready to use
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {playbook.gpts.map((gpt, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${playbook.color}20` }}
                      >
                        <Sparkles className="h-5 w-5" style={{ color: playbook.color }} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{gpt.name}</CardTitle>
                        <CardDescription className="mt-2">
                          {gpt.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#1a1f2e]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">Key Benefits</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {playbook.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#0B0F14] p-4 rounded-lg border border-gray-800">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: playbook.color }} />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#0B0F14]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">How It Works</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold"
                  style={{ backgroundColor: `${playbook.color}20`, color: playbook.color }}
                >
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Purchase & Download</h3>
                  <p className="text-gray-400">Get instant access to your Playbook after purchase. Download all GPT assistants immediately.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold"
                  style={{ backgroundColor: `${playbook.color}20`, color: playbook.color }}
                >
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Import to ChatGPT</h3>
                  <p className="text-gray-400">Follow the simple instructions to import your GPT assistants into ChatGPT.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold"
                  style={{ backgroundColor: `${playbook.color}20`, color: playbook.color }}
                >
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Start Using AI</h3>
                  <p className="text-gray-400">Begin leveraging AI to automate tasks, accelerate learning, and achieve better results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B0F14] to-gray-900 text-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Get instant access for just ${playbook.price}
            </p>
            <Button 
              size="lg" 
              className="text-lg px-12"
              style={{ backgroundColor: playbook.color, color: '#0B0F14' }}
            >
              Get Instant Access – ${playbook.price}
            </Button>
            <p className="text-sm text-gray-400">
              <strong>Note:</strong> Some GPTs may require ChatGPT Plus for full performance
            </p>
            <p className="text-sm text-gray-400">
              ✓ 14-day satisfaction guarantee ✓ Lifetime updates included
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
