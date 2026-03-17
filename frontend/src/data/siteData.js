export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Trainers', path: '/trainers' },
  { label: 'Membership', path: '/membership' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

export const programs = [
  {
    id: 'weight-training',
    name: 'Weight Training',
    description:
      'Build raw strength and lean muscle with structured progressive overload sessions guided by certified coaches.',
    difficulty: 'Intermediate to Advanced',
    image:
      'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'crossfit',
    name: 'CrossFit',
    description:
      'High-intensity functional workouts that challenge endurance, power, and grit in a motivating team atmosphere.',
    difficulty: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'yoga',
    name: 'Yoga Flow',
    description:
      'Improve mobility, balance, and mental focus with breath-led yoga classes tailored to every fitness level.',
    difficulty: 'Beginner to Intermediate',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cardio',
    name: 'Cardio Blast',
    description:
      'Boost heart health and stamina with interval-based cardio sessions designed for fat loss and conditioning.',
    difficulty: 'All Levels',
    image:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
  },
]

export const stats = [
  { label: 'Active Members', value: '3,500+' },
  { label: 'Expert Trainers', value: '45+' },
  { label: 'Years Active', value: '12' },
  { label: 'Weekly Classes', value: '120+' },
]

export const testimonials = [
  {
    name: 'Daniel Brooks',
    role: 'Entrepreneur',
    quote:
      'FitZone changed my routine and my confidence. The coaching is personal, and the energy inside this gym is unreal.',
    rating: 5,
  },
  {
    name: 'Monica Reed',
    role: 'Software Engineer',
    quote:
      'I joined for weight training and stayed for the community. Every trainer pushes you safely and effectively.',
    rating: 5,
  },
  {
    name: 'Aiden Cole',
    role: 'College Athlete',
    quote:
      'Their conditioning and mobility program gave me a serious performance edge on the field.',
    rating: 5,
  },
]

export const trainers = [
  {
    id: 1,
    name: 'Marcus Hale',
    specialization: 'Strength & Conditioning',
    experience: '10 years',
    image:
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 2,
    name: 'Nina Voss',
    specialization: 'CrossFit Coach',
    experience: '8 years',
    image:
      'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=80',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 3,
    name: 'Elena Cruz',
    specialization: 'Yoga & Mobility',
    experience: '7 years',
    image:
      'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?auto=format&fit=crop&w=900&q=80',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 4,
    name: 'Jordan Blake',
    specialization: 'HIIT & Cardio Performance',
    experience: '9 years',
    image:
      'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=900&q=80',
    socials: {
      instagram: 'https://instagram.com',
      twitter: 'https://twitter.com',
    },
  },
]

export const pricingPlans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$59',
    duration: '/month',
    popular: false,
    features: [
      'Full gym floor access',
      '2 group classes/week',
      'Fitness assessment',
      'Locker room access',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: '$149',
    duration: '/3 months',
    popular: true,
    features: [
      'Unlimited gym floor access',
      'Unlimited group classes',
      '1 personal training session/month',
      'Nutrition consultation',
      'Priority support',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$549',
    duration: '/year',
    popular: false,
    features: [
      'All quarterly benefits',
      '4 personal training sessions/month',
      'Custom transformation roadmap',
      'Recovery lounge access',
      'Guest pass every month',
    ],
  },
]

export const galleryImages = [
  {
    id: 1,
    title: 'Strength Zone',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'CrossFit Arena',
    image:
      'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Cardio Section',
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Functional Training',
    image:
      'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Recovery & Stretching',
    image:
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Group Session',
    image:
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    title: 'Power Racks',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    title: 'Weight Room',
    image:
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80',
  },
]

export const contactDetails = {
  phone: '+1 (555) 410-9090',
  email: 'hello@fitzonefitness.com',
  address: '245 Iron Street, Downtown, New York, NY 10012',
}
