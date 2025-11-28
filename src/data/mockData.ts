export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  image: string;
  rating: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Personal Training',
    description: 'One-on-one training sessions with certified professionals',
    icon: '💪',
    features: [
      'Customized workout plans',
      'Nutritional guidance',
      'Progress tracking',
      'Flexible scheduling'
    ],
    price: '$80/session'
  },
  {
    id: '2',
    title: 'Group Classes',
    description: 'High-energy group fitness classes for all levels',
    icon: '👥',
    features: [
      'Yoga & Pilates',
      'HIIT workouts',
      'Dance fitness',
      'Strength training'
    ],
    price: '$40/class'
  },
  {
    id: '3',
    title: 'Nutrition Plans',
    description: 'Personalized diet plans to complement your fitness journey',
    icon: '🥗',
    features: [
      'Meal planning',
      'Supplement guidance',
      'Recipe collections',
      'Weekly check-ins'
    ],
    price: '$150/month'
  },
  {
    id: '4',
    title: 'Wellness Programs',
    description: 'Holistic approach to health and wellness',
    icon: '🧘',
    features: [
      'Stress management',
      'Recovery sessions',
      'Meditation classes',
      'Lifestyle coaching'
    ],
    price: '$200/month'
  },
  {
    id: '5',
    title: 'Sports Performance',
    description: 'Athletic training for competitive sports',
    icon: '🏃',
    features: [
      'Sport-specific training',
      'Injury prevention',
      'Performance analysis',
      'Competition prep'
    ],
    price: '$120/session'
  },
  {
    id: '6',
    title: 'Virtual Training',
    description: 'Online coaching and remote workout support',
    icon: '💻',
    features: [
      'Live video sessions',
      'App-based tracking',
      'Online community',
      'Digital resources'
    ],
    price: '$60/session'
  }
];

export const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Head Trainer',
    bio: 'Certified personal trainer with 10+ years of experience in strength training and nutrition.',
    experience: '10+ years',
    specialties: ['Strength Training', 'Nutrition', 'Weight Loss'],
    image: '/api/placeholder/400/400',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Fitness Coach',
    bio: 'Specialized in HIIT and functional training with a background in sports science.',
    experience: '8 years',
    specialties: ['HIIT', 'Functional Training', 'Sports Performance'],
    image: '/api/placeholder/400/400',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Emma Williams',
    role: 'Yoga Instructor',
    bio: 'Registered yoga teacher focusing on mindfulness and flexibility training.',
    experience: '6 years',
    specialties: ['Yoga', 'Pilates', 'Meditation'],
    image: '/api/placeholder/400/400',
    rating: 5.0
  },
  {
    id: '4',
    name: 'James Rodriguez',
    role: 'Strength Coach',
    bio: 'Former athlete turned strength coach, specializing in muscle building and conditioning.',
    experience: '12 years',
    specialties: ['Bodybuilding', 'Powerlifting', 'Conditioning'],
    image: '/api/placeholder/400/400',
    rating: 4.7
  }
];

export const membershipPlans: MembershipPlan[] = [
  {
    id: '1',
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: [
      'Access to gym equipment',
      'Basic locker room access',
      'Mobile app access',
      'Free fitness assessment'
    ],
    description: 'Perfect for beginners who want access to quality equipment.'
  },
  {
    id: '2',
    name: 'Premium',
    price: '$59',
    period: '/month',
    popular: true,
    features: [
      'All Basic features',
      'Unlimited group classes',
      'Personal trainer consultation',
      'Nutrition guidance',
      'Guest passes (2/month)'
    ],
    description: 'Our most popular plan with comprehensive fitness support.'
  },
  {
    id: '3',
    name: 'Elite',
    price: '$99',
    period: '/month',
    features: [
      'All Premium features',
      'Weekly personal training sessions',
      'Custom meal plans',
      'Priority class booking',
      'Unlimited guest passes',
      'Spa access'
    ],
    description: 'Ultimate fitness experience with personalized attention.'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alex Thompson',
    role: 'Software Developer',
    content: 'This gym completely transformed my fitness journey. The trainers are knowledgeable and supportive, and the equipment is top-notch. I\'ve lost 30 pounds and gained so much confidence!',
    rating: 5,
    image: '/api/placeholder/100/100',
    date: '2024-10-15'
  },
  {
    id: '2',
    name: 'Maria Garcia',
    role: 'Marketing Manager',
    content: 'The group classes here are amazing! The energy is contagious and the instructors keep you motivated. I\'ve made great friends and improved my overall health significantly.',
    rating: 5,
    image: '/api/placeholder/100/100',
    date: '2024-10-10'
  },
  {
    id: '3',
    name: 'David Kim',
    role: 'Entrepreneur',
    content: 'As someone with a busy schedule, the flexible hours and virtual training options have been a lifesaver. The personalized approach really makes a difference.',
    rating: 4,
    image: '/api/placeholder/100/100',
    date: '2024-10-05'
  },
  {
    id: '4',
    name: 'Lisa Anderson',
    role: 'Teacher',
    content: 'I love the wellness programs here! It\'s not just about physical fitness but mental well-being too. The yoga and meditation classes have helped me manage stress better.',
    rating: 5,
    image: '/api/placeholder/100/100',
    date: '2024-09-28'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Modern Equipment',
    category: 'Facility',
    image: '/api/placeholder/600/400',
    description: 'State-of-the-art fitness equipment for all workout types'
  },
  {
    id: '2',
    title: 'Group Yoga Session',
    category: 'Classes',
    image: '/api/placeholder/600/400',
    description: 'Relaxing yoga classes in our spacious studio'
  },
  {
    id: '3',
    title: 'Strength Training Area',
    category: 'Facility',
    image: '/api/placeholder/600/400',
    description: 'Fully equipped strength training zone'
  },
  {
    id: '4',
    title: 'HIIT Class',
    category: 'Classes',
    image: '/api/placeholder/600/400',
    description: 'High-intensity interval training sessions'
  },
  {
    id: '5',
    title: 'Cardio Zone',
    category: 'Facility',
    image: '/api/placeholder/600/400',
    description: 'Modern cardio machines with entertainment systems'
  },
  {
    id: '6',
    title: 'Personal Training',
    category: 'Training',
    image: '/api/placeholder/600/400',
    description: 'One-on-one training with expert coaches'
  }
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What are your gym hours?',
    answer: 'We\'re open Monday-Friday 5:00 AM - 11:00 PM, Saturday 6:00 AM - 9:00 PM, and Sunday 7:00 AM - 8:00 PM. Holiday hours may vary.',
    category: 'General'
  },
  {
    id: '2',
    question: 'Do I need to sign a long-term contract?',
    answer: 'No! We offer flexible month-to-month memberships. You can cancel anytime with 30 days notice. We also offer discounted rates for 6-month and 12-month commitments.',
    category: 'Membership'
  },
  {
    id: '3',
    question: 'Is there an enrollment fee?',
    answer: 'We periodically run promotions with no enrollment fee. Standard enrollment is $49, which includes your initial fitness assessment and orientation.',
    category: 'Membership'
  },
  {
    id: '4',
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 3 months per year for a small monthly fee. Perfect for travel, injury recovery, or busy periods.',
    category: 'Membership'
  },
  {
    id: '5',
    question: 'Do you offer personal training?',
    answer: 'Absolutely! We have certified personal trainers available for one-on-one sessions, small group training, and specialized programs. Rates vary by trainer and package.',
    category: 'Training'
  },
  {
    id: '6',
    question: 'What types of classes do you offer?',
    answer: 'We offer over 50 weekly classes including yoga, HIIT, spin, Pilates, strength training, dance fitness, and more. Classes are included with Premium and Elite memberships.',
    category: 'Classes'
  },
  {
    id: '7',
    question: 'Is there parking available?',
    answer: 'Yes, we have free parking with over 200 spaces. Premium members get reserved parking spots close to the entrance.',
    category: 'Facility'
  },
  {
    id: '8',
    question: 'Do you have locker rooms and showers?',
    answer: 'Yes, we have clean, modern locker rooms with showers, saunas, and complimentary towel service. Premium and Elite members get locker rental included.',
    category: 'Facility'
  }
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks = [
  { platform: 'Facebook', url: '#', icon: '📘' },
  { platform: 'Instagram', url: '#', icon: '📷' },
  { platform: 'Twitter', url: '#', icon: '🐦' },
  { platform: 'YouTube', url: '#', icon: '📺' }
];
