import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          MyPortfolio
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">
            Projects
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}