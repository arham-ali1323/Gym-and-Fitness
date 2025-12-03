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
  image?: string; // Made optional since we're using imageUrl
  rating: number | string;
  clients?: number;
  certifications?: string[];
  availability?: string;
  contact?: {
    email: string;
    phone: string;
  };
  imageUrl?: string;
  imageAlt?: string;
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
    name: 'Alex Johnson',
    role: 'Head Fitness Coach',
    rating: '4.9',
    experience: '10+ Years Experience',
    bio: 'Specialized in strength training and functional fitness with a passion for helping clients achieve their peak physical condition. Alex has trained professional athletes and helped over 250 clients transform their lives through personalized fitness programs.',
    specialties: ['Strength Training', 'Weight Loss', 'Muscle Building', 'Functional Fitness'],
    clients: 320,
    certifications: ['NASM Certified', 'CrossFit Level 3', 'Precision Nutrition', 'FMS Level 1'],
    availability: 'Mon, Wed, Fri',
    contact: {
      email: 'alex@example.com',
      phone: '(555) 123-4567'
    },
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Professional fitness trainer Alex Johnson demonstrating proper form'
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'HIIT & Functional Training Specialist',
    rating: '4.8',
    experience: '8+ Years Experience',
    bio: 'Former collegiate athlete with a degree in Exercise Science, Mike specializes in high-intensity interval training and functional movement patterns. His dynamic training style keeps clients motivated and seeing consistent results.',
    specialties: ['HIIT', 'Functional Training', 'Sports Performance', 'Metabolic Conditioning'],
    clients: 275,
    certifications: ['ACE Certified', 'NSCA-CPT', 'TRX Instructor', 'Kettlebell Specialist'],
    availability: 'Mon, Tue, Thu, Fri',
    contact: {
      email: 'mike@example.com',
      phone: '(555) 987-6543'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Mike Chen leading a high-energy HIIT class'
  },
  {
    id: '3',
    name: 'Sarah Williams',
    role: 'Yoga & Mobility Expert',
    rating: '4.9',
    experience: '12+ Years Experience',
    bio: 'With over a decade of experience in yoga therapy and movement, Sarah helps clients improve flexibility, mobility, and mental well-being. Her holistic approach combines traditional yoga with modern movement science.',
    specialties: ['Vinyasa Yoga', 'Mobility Training', 'Injury Prevention', 'Breathwork'],
    clients: 420,
    certifications: ['RYT 500', 'Yoga Therapy', 'Fascial Stretch Therapy', 'Pilates Mat'],
    availability: 'Tue, Thu, Sat, Sun',
    contact: {
      email: 'sarah@example.com',
      phone: '(555) 234-5678'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Yoga instructor Sarah Williams demonstrating a pose'
  },
  {
    id: '4',
    name: 'James Rodriguez',
    role: 'Strength & Conditioning Coach',
    rating: '4.8',
    experience: '15+ Years Experience',
    bio: 'Former professional athlete with extensive experience in strength and conditioning. James specializes in helping clients build functional strength, improve athletic performance, and prevent injuries through proper movement mechanics.',
    specialties: ['Strength Training', 'Powerlifting', 'Sports Conditioning', 'Mobility'],
    clients: 380,
    certifications: ['CSCS', 'USA Weightlifting', 'FMS Level 2', 'Precision Nutrition'],
    availability: 'Mon-Fri',
    contact: {
      email: 'james@example.com',
      phone: '(555) 345-6789'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'James Rodriguez demonstrating proper lifting form'
  },
  {
    id: '5',
    name: 'Emily Chen',
    role: 'Prenatal & Postnatal Specialist',
    rating: '4.9',
    experience: '7+ Years Experience',
    bio: 'Specializing in prenatal and postnatal fitness, Emily helps women stay strong and healthy throughout pregnancy and beyond. Her gentle yet effective approach focuses on core recovery and functional movement.',
    specialties: ['Prenatal Fitness', 'Postnatal Recovery', 'Pelvic Floor Health', 'Functional Training'],
    clients: 195,
    certifications: ['Pre/Postnatal Certified', 'Pilates Instructor', 'Diastasis Recti Specialist'],
    availability: 'Mon, Wed, Fri, Sat',
    contact: {
      email: 'emily@example.com',
      phone: '(555) 456-7890'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Emily Chen leading a prenatal fitness class'
  },
  {
    id: '6',
    name: 'Marcus Johnson',
    role: 'Senior Trainer & Nutrition Coach',
    rating: '5.0',
    experience: '18+ Years Experience',
    bio: 'With nearly two decades in the fitness industry, Marcus combines his expertise in strength training with evidence-based nutrition coaching to help clients achieve sustainable results and optimal health.',
    specialties: ['Body Recomposition', 'Nutrition Coaching', 'Strength Training', 'Hormone Optimization'],
    clients: 500,
    certifications: ['NASM-CPT', 'Precision Nutrition L2', 'IFBB Pro', 'Functional Medicine Coach'],
    availability: 'By Appointment Only',
    contact: {
      email: 'marcus@example.com',
      phone: '(555) 567-8901'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Marcus Johnson demonstrating proper form with kettlebells'
  },
   {
    id: '7',
    name: 'Sarah Williams',
    role: 'Yoga & Mobility Expert',
    rating: '4.9',
    experience: '12+ Years Experience',
    bio: 'With over a decade of experience in yoga therapy and movement, Sarah helps clients improve flexibility, mobility, and mental well-being. Her holistic approach combines traditional yoga with modern movement science.',
    specialties: ['Vinyasa Yoga', 'Mobility Training', 'Injury Prevention', 'Breathwork'],
    clients: 420,
    certifications: ['RYT 500', 'Yoga Therapy', 'Fascial Stretch Therapy', 'Pilates Mat'],
    availability: 'Tue, Thu, Sat, Sun',
    contact: {
      email: 'sarah@example.com',
      phone: '(555) 234-5678'
    },
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Yoga instructor Sarah Williams demonstrating a pose'
  },
    {
    id: '8',
    name: 'Alex Johnson',
    role: 'Head Fitness Coach',
    rating: '4.9',
    experience: '10+ Years Experience',
    bio: 'Specialized in strength training and functional fitness with a passion for helping clients achieve their peak physical condition. Alex has trained professional athletes and helped over 250 clients transform their lives through personalized fitness programs.',
    specialties: ['Strength Training', 'Weight Loss', 'Muscle Building', 'Functional Fitness'],
    clients: 320,
    certifications: ['NASM Certified', 'CrossFit Level 3', 'Precision Nutrition', 'FMS Level 1'],
    availability: 'Mon, Wed, Fri',
    contact: {
      email: 'alex@example.com',
      phone: '(555) 123-4567'
    },
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Professional fitness trainer Alex Johnson demonstrating proper form'
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
    title: 'Modern Cardio Zone',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1534438327276-14e9300c3bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'State-of-the-art cardio equipment with personal screens and interactive training programs'
  },
  {
    id: '2',
    title: 'Sunset Yoga Flow',
    category: 'Classes',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Evening yoga sessions with breathtaking sunset views from our rooftop studio'
  },
  {
    id: '3',
    title: 'Premium Strength Training',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Fully equipped free weights and resistance training area with premium equipment'
  },
  {
    id: '4',
    title: 'High-Energy HIIT Class',
    category: 'Classes',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'High-intensity interval training that pushes your limits and burns maximum calories'
  },
  {
    id: '5',
    title: 'Olympic Lifting Platform',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Dedicated Olympic lifting platforms with professional-grade bumper plates'
  },
  {
    id: '6',
    title: 'Personal Training Session',
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'One-on-one training with our certified personal trainers for personalized results'
  },
  {
    id: '7',
    title: 'Indoor Cycling Studio',
    category: 'Classes',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Immersive cycling experience with synchronized lighting and music'
  },
  {
    id: '8',
    title: 'Functional Training Zone',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1571902943201-8b4a8a1a8b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Versatile space for functional training with TRX, battle ropes, and more'
  },
  {
    id: '9',
    title: 'Recovery & Stretching Area',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Dedicated recovery zone with foam rollers, massage guns, and stretching areas'
  },
  {
    id: '10',
    title: 'Cardio Zone',
    category: 'Facility',
    image: 'https://images.unsplash.com/photo-1534438327276-14e9300c3bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Modern cardio machines with entertainment systems'
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
