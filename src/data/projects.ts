import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'field-track',
    title: 'Field Track',
    description: 'Real-time field operations tracking and management system for distributed teams.',
    type: 'app',
    category: 'Operations',
    features: ['Live GPS Tracking', 'Task Assignment', 'Offline Sync', 'Performance Analytics'],
    image: 'https://picsum.photos/seed/field/800/600',
    color: 'blue'
  },
  {
    id: 'call-track',
    title: 'Call Track',
    description: 'Comprehensive call monitoring and management system for customer support centers.',
    type: 'app',
    category: 'Communication',
    features: ['Call Logging', 'Agent Performance', 'Sentiment Analysis', 'Real-time Dashboards'],
    image: 'https://picsum.photos/seed/call/800/600',
    color: 'green'
  },
  {
    id: 'fab-track',
    title: 'FabTrack',
    description: 'Advanced fabrication and manufacturing process tracking for industrial efficiency.',
    type: 'app',
    category: 'Manufacturing',
    features: ['Inventory Control', 'Workflow Automation', 'Quality Assurance', 'Resource Planning'],
    image: 'https://picsum.photos/seed/fab/800/600',
    color: 'orange'
  },
  {
    id: 'tailor-net',
    title: 'Tailor Net',
    description: 'Streamlined apparel and tailoring management system for boutique and large-scale operations.',
    type: 'app',
    category: 'Apparel',
    features: ['Measurement Database', 'Order Tracking', 'Fabric Inventory', 'Customer Portal'],
    image: 'https://picsum.photos/seed/tailor/800/600',
    color: 'purple'
  },
  {
    id: 'e-to-solve',
    title: 'E to Solve',
    description: 'Static business website focused on clean UI and responsive layouts for professional services.',
    type: 'site',
    category: 'Business',
    features: ['Responsive Design', 'Service Showcase', 'Contact Integration', 'SEO Optimized'],
    image: 'https://picsum.photos/seed/solve/800/600',
    color: 'zinc'
  },
  {
    id: 'swetha-creations',
    title: 'Swetha Creations',
    description: 'Brand-oriented static website for creative design and artistic portfolios.',
    type: 'site',
    category: 'Creative',
    features: ['Portfolio Gallery', 'Brand Storytelling', 'Interactive Elements', 'High-res Imagery'],
    image: 'https://picsum.photos/seed/swetha/800/600',
    color: 'pink'
  },
  {
    id: 'crown-cargo',
    title: 'Crown Cargo',
    description: 'Responsive static website for logistics and cargo management services.',
    type: 'site',
    category: 'Logistics',
    features: ['Service Overview', 'Tracking Portal Link', 'Global Network Map', 'Quote Request'],
    image: 'https://picsum.photos/seed/cargo/800/600',
    color: 'amber'
  }
];
