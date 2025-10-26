import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { playbooks } from '@/lib/data';

export function Playbooks() {
  return (
    <div className="w-full py-20 bg-[#1a1f2e]">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              AI Playbooks
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your Playbook and get instant access to expert-built GPT assistants
            </p>
          </div>

          {/* Playbooks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {playbooks.map((playbook) => (
              <Card 
                key={playbook.id} 
                className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-[#0B0F14] hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-5xl">{playbook.icon}</span>
                    <span 
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: `${playbook.color}20`, color: playbook.color }}
                    >
                      {playbook.category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{playbook.title}</CardTitle>
                  <CardDescription className="text-base">
                    {playbook.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#0B0F14]">Includes {playbook.gpts.length} GPTs:</p>
                    <ul className="space-y-2">
                      {playbook.gpts.map((gpt, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" style={{ color: playbook.color }} />
                          <span>{gpt.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <div className="w-full flex items-center justify-between border-t pt-4">
                    <div>
                      <p className="text-sm text-gray-400">Price</p>
                      <span className="text-3xl font-bold text-[#0B0F14]">${playbook.price}</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col sm:flex-row gap-2">
                    <Button 
                      asChild 
                      className="flex-1"
                      style={{ backgroundColor: playbook.color, color: '#0B0F14' }}
                    >
                      <Link to={`/playbook/${playbook.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-2"
                      style={{ borderColor: playbook.color, color: playbook.color }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Bundle Offer */}
          <div className="mt-16 bg-gradient-to-r from-gold/20 to-orange/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-[#0B0F14] mb-4">
              Save with Bundles
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Buy multiple Playbooks and save big with our bundle offers
            </p>
            <Button asChild size="lg" className="bg-[#0B0F14] text-white hover:bg-[#0B0F14]/90">
              <Link to="/pricing">
                View Bundle Pricing
              </Link>
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-sm text-gray-400 bg-[#0B0F14] rounded-lg p-6 border border-gray-800">
            <p>
              <strong>Note:</strong> Some GPTs may require ChatGPT Plus for full performance. 
              Most features work with the free version of ChatGPT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
