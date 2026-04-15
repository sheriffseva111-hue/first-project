import { Link } from 'react-router-dom';
import { LayoutGrid, AppWindow, Globe, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white transition-transform group-hover:scale-110">
              <LayoutGrid size={18} />
            </div>
            <span className="text-lg font-bold tracking-tight">Industry Solutions Hub</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link to="/" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">Projects</Link>
          <Link to="/#apps" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">Web Apps</Link>
          <Link to="/#sites" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">Static Sites</Link>
          <Button variant="outline" size="sm" className="rounded-full">
            Contact Team
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 py-8">
                <Link to="/" className="text-lg font-semibold">Home</Link>
                <Link to="/#apps" className="text-lg font-semibold">Web Apps</Link>
                <Link to="/#sites" className="text-lg font-semibold">Static Sites</Link>
                <Button className="mt-4 w-full">Contact Team</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
