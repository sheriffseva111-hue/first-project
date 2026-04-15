export type ProjectType = 'app' | 'site';

export interface Project {
  id: string;
  title: string;
  description: string;
  type: ProjectType;
  category: string;
  features: string[];
  image: string;
  color: string;
}
