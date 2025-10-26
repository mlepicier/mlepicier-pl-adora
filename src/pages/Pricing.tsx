import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';
import { playbooks } from '@/lib/data';

export function Pricing() {
  return (
    <div className="w-full py-20 bg-[#1a1f2e]">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-glow">
              Pricing & Bundles
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose individual Playbooks or save with our bundle offers
            </p>
          </div>

          {/* Launch Promo */}
          <div className="bg-gradient-to-r from-gold/20 via-orange/20 to-gold/20 rounded-2xl p-8 text-center border-2 border-gold shadow-2xl pulse-glow gradient-animate">
            <Star className="h-12 w-12 mx-auto mb-4 text-gold fill-gold animate-float" />
            <h2 className="text-3xl font-bold text-white mb-4 text-glow">
              🎉 Launch Promo — Limited Time Only!
            </h2>
            <div className="space-y-2 text-lg text-gray-200">
              <p className="font-semibold">✓ Buy 1, get 25% off your 2nd Playbook</p>
              <p className="font-semibold">✓ Buy 3, get 1 FREE!</p>
            </div>
          </div>

          {/* Individual Pricing */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Individual Playbooks
              </h2>
              <p className="text-lg text-gray-400">
                Each Playbook includes 4 expert-built GPT assistants
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playbooks.map((playbook) => (
                <Card key={playbook.id} className="border-2 hover:shadow-2xl transition-all duration-300 hover-lift group cursor-pointer" style={{ borderColor: playbook.color }}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{playbook.icon}</span>
                      <div>
                        <CardTitle className="text-xl text-white">{playbook.title}</CardTitle>
                        <CardDescription className="text-gray-300">{playbook.category}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">${playbook.price}</span>
                      <span className="text-gray-300 ml-2">one-time</span>
                    </div>
                    <ul className="space-y-2">
                      {playbook.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: playbook.color }} />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      asChild 
                      className="w-full font-semibold shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: playbook.color, color: '#0B0F14' }}
                    >
                      <Link to={`/playbook/${playbook.slug}`}>
                        Get This Playbook
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Bundle Offers */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Bundle Offers
              </h2>
              <p className="text-lg text-gray-400">
                Save more when you buy multiple Playbooks together
              </p>
            </div>

                        <div className="grid md:grid-cols-2 gap-8">
              {/* Productivity Bundle */}
              <Card className="border-2 border-green relative hover-lift hover:shadow-2xl transition-all duration-300 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  POPULAR
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Work & Growth Bundle</CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Perfect for professionals focused on career growth
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-5xl font-bold text-white">${59}</span>
                    <span className="text-gray-300 ml-2 line-through">$58</span>
                    <span className="text-green ml-2 font-semibold">(Save $29)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Includes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 mr-2 text-green" />
                        ⚡ Productivity Playbook
                      </li>
                      <li className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 mr-2 text-green" />
                        🚀 Self-Development Playbook
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green text-white hover:bg-green/90 font-semibold shadow-lg hover:shadow-xl hover:glow-green">
                    Get Bundle
                  </Button>
                </CardFooter>
              </Card>

              {/* Lifestyle Bundle */}
              <Card className="border-2 border-orange hover-lift hover:shadow-2xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Lifestyle Bundle</CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Balance work and life with AI-powered wellness
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-5xl font-bold text-white">${59}</span>
                    <span className="text-gray-300 ml-2 line-through">$58</span>
                    <span className="text-orange ml-2 font-semibold">(Save $29)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-white">Includes:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 mr-2 text-orange" />
                        💪 Fitness Playbook
                      </li>
                      <li className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 mr-2 text-orange" />
                        👨‍🍳 Cooking Playbook
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange text-white hover:bg-orange/90 font-semibold shadow-lg hover:shadow-xl hover:glow-orange">
                    Get Bundle
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* All Access (Future) */}
          <Card className="bg-gradient-to-br from-purple/10 to-blue/10 border-2 border-purple hover-lift hover:shadow-2xl transition-all duration-300 hover:glow-purple">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-white text-glow">All Access — Coming Soon</CardTitle>
              <CardDescription className="text-lg text-gray-300">
                Unlimited access to all current and future Playbooks
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div>
                <span className="text-6xl font-bold text-white">${9.99}</span>
                <span className="text-gray-300 text-xl ml-2">/month</span>
              </div>
              <ul className="space-y-3 max-w-md mx-auto">
                <li className="flex items-center text-left text-gray-300">
                  <CheckCircle className="h-5 w-5 mr-3 text-purple flex-shrink-0" />
                  <span>All 6 Playbooks (24+ GPTs)</span>
                </li>
                <li className="flex items-center text-left text-gray-300">
                  <CheckCircle className="h-5 w-5 mr-3 text-purple flex-shrink-0" />
                  <span>New Playbooks added monthly</span>
                </li>
                <li className="flex items-center text-left text-gray-300">
                  <CheckCircle className="h-5 w-5 mr-3 text-purple flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-left text-gray-300">
                  <CheckCircle className="h-5 w-5 mr-3 text-purple flex-shrink-0" />
                  <span>Early access to new features</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="justify-center">
              <Button size="lg" className="bg-purple text-white hover:bg-purple/90 font-semibold shadow-lg" disabled>
                Notify Me When Available
              </Button>
            </CardFooter>
          </Card>

          {/* What's Included */}
          <div className="bg-[#0B0F14] rounded-2xl p-8 space-y-6 border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold text-white text-center text-glow">
              What's Included With Every Purchase
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2 group">
                <CheckCircle className="h-8 w-8 mx-auto text-green transition-transform duration-300 group-hover:scale-110" />
                <p className="font-semibold text-white">Instant Access</p>
                <p className="text-sm text-gray-300">Download immediately after purchase</p>
              </div>
              <div className="text-center space-y-2 group">
                <CheckCircle className="h-8 w-8 mx-auto text-green transition-transform duration-300 group-hover:scale-110" />
                <p className="font-semibold text-white">Lifetime Updates</p>
                <p className="text-sm text-gray-300">Free updates for early buyers</p>
              </div>
              <div className="text-center space-y-2 group">
                <CheckCircle className="h-8 w-8 mx-auto text-green transition-transform duration-300 group-hover:scale-110" />
                <p className="font-semibold text-white">14-Day Guarantee</p>
                <p className="text-sm text-gray-300">Full refund if not satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
