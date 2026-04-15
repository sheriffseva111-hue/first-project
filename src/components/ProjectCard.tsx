import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, AppWindow, Globe } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  key?: string | number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/project/${project.id}`}>
        <Card className="group h-full overflow-hidden border-zinc-200 transition-all hover:border-zinc-400 hover:shadow-lg">
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              {project.type === 'app' ? (
                <Badge className="bg-white text-zinc-900 hover:bg-white">
                  <AppWindow size={12} className="mr-1" /> Web App
                </Badge>
              ) : (
                <Badge className="bg-white text-zinc-900 hover:bg-white">
                  <Globe size={12} className="mr-1" /> Static Site
                </Badge>
              )}
            </div>
          </div>
          <CardHeader className="p-6 pb-2">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{project.category}</p>
                <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
              </div>
              <div className="rounded-full bg-zinc-100 p-2 text-zinc-900 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-6 py-2">
            <p className="line-clamp-2 text-sm text-zinc-600">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 p-6 pt-4">
            {project.features.slice(0, 3).map((feature, i) => (
              <span key={i} className="text-[10px] font-medium uppercase tracking-tight text-zinc-400">
                {feature}
              </span>
            ))}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
