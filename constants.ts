import { UserPlus, Calendar, ShieldCheck, Users } from 'lucide-react';
import { Feature, Plan, Testimonial } from './types';

export const COLORS = {
  primary: '#6A0DAD',
  white: '#FFFFFF',
  black: '#000000',
  secondaryPurple: '#8A2BE2',
};

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: 'Create Your Profile',
    description: 'Showcase your skills, location, and professional type to the world.',
    icon: UserPlus,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Post & Discover Gigs',
    description: 'Find high-quality gigs locally or across the entire African continent.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Get Verified',
    description: 'Unlock exclusive high-paying gigs with our verification badge.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Network & Collaborate',
    description: 'Connect with other sound engineers, DJs, and artists for projects.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1520166012956-add9ba0835bb?auto=format&fit=crop&q=80&w=800',
  },
];

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    priceLocal: 'Free',
    features: ['Create Professional Profile', 'View Local Gigs', 'Basic Support', 'Community Access'],
    buttonText: 'Start for Free',
  },
  {
    id: 'gold',
    name: 'Gold Plan',
    priceLocal: '₦1,000 /mo',
    priceIntl: '$2 /mo',
    features: ['Everything in Starter', 'Verified Badge (One-time fee)', 'Apply to Exclusive Gigs', 'Priority Support'],
    isPopular: true,
    buttonText: 'Go Gold',
  },
  {
    id: 'diamond',
    name: 'Diamond Plan',
    priceLocal: '₦2,500 /mo',
    priceIntl: '$5 /mo',
    features: ['Everything in Gold', 'Featured Profile Placement', 'International Gig Access', 'Direct Messaging'],
    buttonText: 'Get Diamond',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Okafor',
    role: 'Afrobeats Producer',
    location: 'Lagos, Nigeria',
    quote: "Thanks to GigsConnect, I found gigs across 3 cities this month! The platform is a game-changer for African music professionals.",
    avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    name: 'Sarah Kimani',
    role: 'Live Sound Engineer',
    location: 'Nairobi, Kenya',
    quote: "I was struggling to find consistent work until I joined. The verification badge really helps build trust with new clients.",
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    name: 'Kwame Mensah',
    role: 'Event DJ',
    location: 'Accra, Ghana',
    quote: "Networking with other DJs has never been easier. GigsConnect is the LinkedIn for the African entertainment industry.",
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200',
  },
];
