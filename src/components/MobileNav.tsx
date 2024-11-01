import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
];

export function MobileNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative block sm:hidden">
      <button
        type="button"
        className="flex items-center py-3 text-sm transition-colors hover:text-zinc-300 sm:hidden sm:text-base"
        onClick={() => setIsActive(!isActive)}
      >
        <Menu size="18" />
        <span>&nbsp;</span>
      </button>
      {isActive && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center rounded-md bg-zinc-800">
          <button
            type="button"
            className="absolute left-7 top-7 p-3 transition-colors hover:text-zinc-200"
            onClick={() => setIsActive(false)}
          >
            <X size="18" strokeWidth={3} />
          </button>
          {links.map((link) => (
            <a
              href={link.href}
              className="flex items-center py-1.5 text-xl transition-colors hover:text-zinc-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
