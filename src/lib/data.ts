import { Playbook } from '@/types';

export const playbooks: Playbook[] = [
  {
    id: '1',
    title: 'Finance Playbook',
    slug: 'finance',
    description: 'Build wealth smarter with AI-powered financial tools',
    price: 29,
    color: '#FFD55A',
    icon: '💰',
    category: 'Finance',
    benefits: [
      'Portfolio analyzers for investment tracking',
      'Smart budgeting GPTs',
      'Financial trend trackers',
      'Retirement planning assistant'
    ],
    gpts: [
      {
        name: 'Portfolio Analyzer',
        description: 'Track and analyze your investment portfolio with AI-driven insights'
      },
      {
        name: 'Budget Optimizer',
        description: 'Create and maintain smart budgets that adapt to your lifestyle'
      },
      {
        name: 'Market Trend Tracker',
        description: 'Stay ahead with real-time financial market analysis'
      },
      {
        name: 'Retirement Planner',
        description: 'Plan your retirement with personalized projections and strategies'
      }
    ]
  },
  {
    id: '2',
    title: 'Productivity Playbook',
    slug: 'productivity',
    description: 'Automate your workflow and reclaim your time',
    price: 29,
    color: '#00E0A4',
    icon: '⚡',
    category: 'Productivity',
    benefits: [
      'Email assistant for inbox zero',
      'Note summarizer and organizer',
      'Legal document analyzer',
      'Advanced writing GPTs'
    ],
    gpts: [
      {
        name: 'Email Assistant',
        description: 'Achieve inbox zero with intelligent email management'
      },
      {
        name: 'Note Summarizer',
        description: 'Transform lengthy notes into actionable summaries'
      },
      {
        name: 'Legal Analyzer',
        description: 'Understand complex legal documents with ease'
      },
      {
        name: 'Writing Assistant',
        description: 'Elevate your writing with AI-powered suggestions'
      }
    ]
  },
  {
    id: '3',
    title: 'Self-Development Playbook',
    slug: 'self-development',
    description: 'Accelerate personal growth and career advancement',
    price: 29,
    color: '#7C5CFF',
    icon: '🚀',
    category: 'Self-Development',
    benefits: [
      'Career path optimizer',
      'Daily gratitude journal',
      'Mindfulness coach',
      'Goal tracking system'
    ],
    gpts: [
      {
        name: 'Career Optimizer',
        description: 'Navigate your career path with data-driven insights'
      },
      {
        name: 'Gratitude Journal',
        description: 'Build a daily gratitude practice for mental wellbeing'
      },
      {
        name: 'Mindfulness Coach',
        description: 'Develop mindfulness habits with guided practices'
      },
      {
        name: 'Goal Tracker',
        description: 'Set, track, and achieve your personal and professional goals'
      }
    ]
  },
  {
    id: '4',
    title: 'Cooking Playbook',
    slug: 'cooking',
    description: 'Eat smarter with AI-powered culinary guidance',
    price: 29,
    color: '#FFA73B',
    icon: '👨‍🍳',
    category: 'Cooking',
    benefits: [
      'AI chef for custom recipes',
      'Meal planner with nutrition tracking',
      'Grocery list optimizer',
      'Dietary restriction assistant'
    ],
    gpts: [
      {
        name: 'AI Chef',
        description: 'Get personalized recipes based on your preferences and available ingredients'
      },
      {
        name: 'Meal Planner',
        description: 'Plan weekly meals with nutritional balance and variety'
      },
      {
        name: 'Grocery Optimizer',
        description: 'Generate efficient grocery lists and save money'
      },
      {
        name: 'Dietary Assistant',
        description: 'Navigate dietary restrictions with delicious alternatives'
      }
    ]
  },
  {
    id: '5',
    title: 'Fitness Playbook',
    slug: 'fitness',
    description: 'Train smarter with personalized AI fitness coaching',
    price: 29,
    color: '#FF4141',
    icon: '💪',
    category: 'Fitness',
    benefits: [
      'Personal trainer GPT',
      'Custom diet planner',
      'Workout tracker and analyzer',
      'Recovery optimization'
    ],
    gpts: [
      {
        name: 'Personal Trainer',
        description: 'Get customized workout plans adapted to your fitness level'
      },
      {
        name: 'Diet Planner',
        description: 'Optimize your nutrition for your fitness goals'
      },
      {
        name: 'Workout Tracker',
        description: 'Track progress and analyze performance metrics'
      },
      {
        name: 'Recovery Coach',
        description: 'Optimize rest and recovery for better results'
      }
    ]
  },
  {
    id: '6',
    title: 'Travel Playbook',
    slug: 'travel',
    description: 'Explore smarter with AI travel planning',
    price: 29,
    color: '#0047FF',
    icon: '✈️',
    category: 'Travel',
    benefits: [
      'Destination matcher for perfect trips',
      'Comprehensive trip planner',
      'Budget travel assistant',
      'Local experiences finder'
    ],
    gpts: [
      {
        name: 'Destination Matcher',
        description: 'Find your perfect destination based on preferences and budget'
      },
      {
        name: 'Trip Planner',
        description: 'Create detailed itineraries with optimal timing and logistics'
      },
      {
        name: 'Budget Assistant',
        description: 'Travel more while spending less with smart budgeting'
      },
      {
        name: 'Experience Finder',
        description: 'Discover authentic local experiences and hidden gems'
      }
    ]
  }
];

export const faqs = [
  {
    question: 'Do I need ChatGPT Plus?',
    answer: 'Only for advanced GPTs. Most features work with the free version of ChatGPT, but some advanced capabilities may require ChatGPT Plus for optimal performance.'
  },
  {
    question: 'How do I access the Playbooks?',
    answer: 'Instantly after purchase! You\'ll receive immediate access to download your Playbook and all included GPT assistants via email.'
  },
  {
    question: 'Are updates included?',
    answer: 'Yes, lifetime updates for early buyers! As we improve and add new GPTs to each Playbook, you\'ll get all updates at no additional cost.'
  },
  {
    question: 'What about refunds?',
    answer: 'We offer a 14-day satisfaction guarantee. If you\'re not happy with your purchase, contact us within 14 days for a full refund.'
  }
];
