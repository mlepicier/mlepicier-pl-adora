import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import { faqs } from '@/lib/data';

export function FAQ() {
  return (
    <div className="w-full py-20 bg-[#1a1f2e]">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="h-8 w-8 text-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400">
              Everything you need to know about PlayLabs.ai Playbooks
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl flex items-start gap-3">
                    <span className="text-gold flex-shrink-0">Q.</span>
                    <span>{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-lg leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Questions */}
          <div className="space-y-4">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-start gap-3">
                  <span className="text-gold flex-shrink-0">Q.</span>
                  <span>Can I use these with the free version of ChatGPT?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  Yes! Most GPT assistants work great with the free version of ChatGPT. However, 
                  some advanced features may require ChatGPT Plus for optimal performance. We clearly 
                  indicate when Plus is recommended for specific GPTs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-start gap-3">
                  <span className="text-gold flex-shrink-0">Q.</span>
                  <span>What format are the Playbooks delivered in?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  Each Playbook is delivered as a downloadable PDF with detailed instructions and 
                  GPT configuration files. You'll also receive step-by-step guides on how to import 
                  the GPTs into ChatGPT for immediate use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-start gap-3">
                  <span className="text-gold flex-shrink-0">Q.</span>
                  <span>Can I share my Playbooks with others?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  Each Playbook is licensed for individual use. If you want to share with team members, 
                  please contact us about team licensing options. We offer special rates for organizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-start gap-3">
                  <span className="text-gold flex-shrink-0">Q.</span>
                  <span>How often do you add new GPTs to existing Playbooks?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  We continuously improve and expand our Playbooks. Early buyers receive lifetime access 
                  to all updates, which typically include new GPTs every 2-3 months, along with 
                  improvements to existing ones based on user feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-start gap-3">
                  <span className="text-gold flex-shrink-0">Q.</span>
                  <span>Do you offer support if I have issues?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  Absolutely! Every purchase includes email support. We're here to help you get the most 
                  out of your Playbooks. Response time is typically within 24 hours on business days.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-start gap-3">
                  <span className="text-gold flex-shrink-0">Q.</span>
                  <span>What payment methods do you accept?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed pl-8">
                  We accept all major credit cards, debit cards, and digital payment methods through 
                  our secure payment processor (Stripe/Lemon Squeezy). Your payment information is 
                  encrypted and never stored on our servers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Still Have Questions */}
          <div className="bg-gradient-to-r from-gold/20 to-orange/20 rounded-2xl p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#0B0F14]">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-300">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0B0F14] text-white hover:bg-[#0B0F14]/90">
                <a href="mailto:support@playlabs.ai">
                  Contact Support
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/free-gpt">
                  Try Free GPT
                </Link>
              </Button>
            </div>
          </div>

          {/* Ready to Start */}
          <div className="text-center pt-8">
            <h3 className="text-2xl font-bold text-[#0B0F14] mb-4">
              Ready to Get Started?
            </h3>
            <Button asChild size="lg" className="bg-gold text-[#0B0F14] hover:bg-gold/90">
              <Link to="/playbooks">
                Browse All Playbooks
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
