import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  BarChart3, 
  Map as MapIcon, 
  Clock, 
  Users,
  Settings,
  Bell,
  Search
} from 'lucide-react';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-zinc-200 bg-zinc-50/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="rounded-full">{project.category}</Badge>
                <Badge variant="outline" className="rounded-full">{project.type === 'app' ? 'Web Application' : 'Static Website'}</Badge>
              </div>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="mt-4 text-lg text-zinc-600">{project.description}</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-full">
                View Documentation
              </Button>
              <Button className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800">
                Live Demo <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left Column: Details */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold">Key Features</h2>
            <ul className="mt-6 space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-zinc-900">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-zinc-600">{feature}</span>
                </li>
              ))}
            </ul>

            <Separator className="my-10" />

            <h2 className="text-xl font-bold">Project Info</h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-sm font-medium text-zinc-500">Industry</dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900">{project.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">Tech Stack</dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'TypeScript', 'Motion'].map(tech => (
                    <Badge key={tech} variant="outline" className="text-[10px]">{tech}</Badge>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-zinc-500">Team Size</dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900">4 Members</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Preview/Dashboard */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="ml-4 flex h-6 flex-1 items-center rounded bg-zinc-100 px-3 text-[10px] text-zinc-400">
                  https://{project.id}.solutions-hub.io
                </div>
              </div>

              {/* Simulated Content */}
              <div className="aspect-[16/10] overflow-y-auto bg-white p-6">
                {project.type === 'app' ? (
                  <SimulatedApp id={project.id} title={project.title} />
                ) : (
                  <SimulatedSite id={project.id} title={project.title} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimulatedApp({ id, title }: { id: string; title: string }) {
  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">{title} Dashboard</h3>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search data..." 
              className="h-8 rounded-md border border-zinc-200 bg-zinc-50 pl-9 pr-3 text-xs focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>
          <Bell size={18} className="text-zinc-400" />
          <div className="h-8 w-8 rounded-full bg-zinc-200" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Tasks', value: '1,284', change: '+12%', icon: BarChart3 },
          { label: 'Active Agents', value: '42', change: '+3', icon: Users },
          { label: 'Avg. Time', value: '24m', change: '-2m', icon: Clock },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
            <div className="flex items-center justify-between text-zinc-400">
              <stat.icon size={16} />
              <span className="text-[10px] font-bold text-emerald-600">{stat.change}</span>
            </div>
            <p className="mt-2 text-xs font-medium text-zinc-500">{stat.label}</p>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 rounded-xl border border-zinc-100 bg-zinc-50 p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-bold flex items-center gap-2">
            <MapIcon size={16} /> Real-time Activity
          </h4>
          <Button variant="ghost" size="sm" className="h-7 text-[10px]">View Full Map</Button>
        </div>
        <div className="relative h-48 w-full rounded-lg bg-zinc-200 overflow-hidden">
          <img 
            src={`https://picsum.photos/seed/${id}-map/800/400`} 
            alt="Map Preview" 
            className="h-full w-full object-cover opacity-50 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white animate-pulse">
                <MapIcon size={20} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-900">Live Tracking Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimulatedSite({ id, title }: { id: string; title: string }) {
  return (
    <div className="flex flex-col gap-12">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-black italic">{title}</div>
        <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-zinc-500">
          <span>Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>

      <div className="flex flex-col items-center text-center gap-6 py-12">
        <h3 className="max-w-xl text-4xl font-bold tracking-tight">
          Elevating Your Business with <span className="text-zinc-400">Premium</span> Solutions.
        </h3>
        <p className="max-w-md text-sm text-zinc-500">
          We provide industry-leading services tailored to your specific needs, ensuring growth and excellence in every project.
        </p>
        <div className="flex gap-4">
          <div className="h-10 w-32 rounded bg-zinc-900" />
          <div className="h-10 w-32 rounded border border-zinc-200" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex flex-col gap-4">
            <div className="aspect-square rounded-xl bg-zinc-100 overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${id}-site-${i}/400/400`} 
                alt="Feature" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-4 w-2/3 rounded bg-zinc-100" />
            <div className="h-3 w-full rounded bg-zinc-50" />
          </div>
        ))}
      </div>
    </div>
  );
}
