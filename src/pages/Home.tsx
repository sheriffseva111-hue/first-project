import { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

export function Home() {
  const [filter, setFilter] = useState<'all' | 'app' | 'site'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <div className="flex flex-col gap-16 pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="outline" className="mb-6 border-zinc-700 text-zinc-300">
              Portfolio Platform v2.0
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Modern Solutions for <span className="text-zinc-400 italic font-serif">Practical</span> Industry Needs.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              A comprehensive showcase of real-time tracking applications and responsive business websites built for performance, usability, and scalability.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                Explore Projects
              </button>
              <a href="#" className="text-sm font-semibold leading-6 text-white flex items-center gap-2 group">
                Learn our process <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: Zap, title: 'Fast Performance', desc: 'Built with Next.js & Vite for optimized rendering.' },
            { icon: Shield, title: 'Secure Systems', desc: 'Robust data handling and monitoring workflows.' },
            { icon: Users, title: 'Team Collaboration', desc: 'Developed by a dedicated team of experts.' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-zinc-300 hover:shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-900">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-50 p-8 md:p-16">
          <div className="flex flex-col gap-12 md:flex-row md:items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight">Collaborative Excellence</h2>
              <p className="mt-4 text-lg text-zinc-600">
                Our team of four dedicated developers worked together to build this comprehensive platform, ensuring seamless navigation, reusable components, and optimized performance across all applications.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full bg-zinc-200" />
                    <span className="text-xs font-medium text-zinc-500">Developer {i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-2xl bg-zinc-200 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/teamwork/800/450" 
                  alt="Team Collaboration" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Projects</h2>
              <p className="text-zinc-500">Explore our range of applications and websites.</p>
            </div>
            <Tabs defaultValue="all" onValueChange={(v) => setFilter(v as any)}>
              <TabsList className="bg-zinc-100 p-1">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="app">Web Apps</TabsTrigger>
                <TabsTrigger value="site">Static Sites</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
