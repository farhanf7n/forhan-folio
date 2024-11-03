import { GitHubIcon } from './GitHubIcon.tsx';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Globe,
} from 'lucide-react';
import { cn } from '../utils/cn.ts';
import { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { EmploymentButton } from './EmploymentButton.tsx';

export type ProjectCardProps = {
  title: string;
  description: string;
  logoSrc?: string;
  stats: Record<string, string | number>;
  links: {
    website?: string;
    github?: string;
  };
  images?: { src: string; title: string }[];
};

export function ProjectCard(props: ProjectCardProps) {
  const { title, images = [], logoSrc, description, stats, links } = props;

  const [showDemo, setShowDemo] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="relative overflow-hidden rounded-lg bg-zinc-800 p-3">
      <div>
        <h2 className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-2">
            <a
              href={links.website}
              className="text-lg font-medium text-zinc-50 sm:text-xl"
              target="_blank"
            >
              {title}
            </a>
            {title.toLowerCase() === 'roadmap.sh' && (
              <EmploymentButton text={'acquired'} type={'roadmapAcquisition'} />
            )}
          </div>
          {logoSrc && (
            <div className="absolute right-4 top-4 hidden sm:block">
              <img alt={title} src={logoSrc} className="h-12 w-12 opacity-40" />
            </div>
          )}
        </h2>
        <p
          className={cn('my-3 text-sm sm:text-base', {
            'pr-0 sm:pr-14': logoSrc,
          })}
        >
          {description}
        </p>
        <div className="my-5 grid grid-cols-2 justify-between gap-2 sm:grid-cols-4">
          {Object.keys(stats).map((key) => (
            <div
              key={key}
              className="rouded-md flex flex-grow flex-col rounded-lg bg-gradient-to-b from-zinc-900/40 px-3 py-3"
            >
              <span className="mb-1 text-xs uppercase tracking-wide text-zinc-500">
                {key}
              </span>
              <span className="text-zinc-400">{stats[key]}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="-mx-3 -mb-3 -mt-3 flex items-center justify-between p-3">
        <div>
          {images.length > 0 && (
            <button
              onClick={() => {
                setShowDemo(!showDemo);
              }}
              className={cn(
                'flex items-center gap-1 rounded-lg bg-zinc-700 py-2 pl-2 pr-2 text-sm hover:text-zinc-300 sm:py-1 sm:pr-3',
                {
                  'hover:bg-zinc-600': !showDemo,
                  'bg-zinc-600/40': showDemo,
                },
              )}
            >
              {showDemo ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              <span className="hidden sm:inline-block">Highlights</span>
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 text-zinc-500">
          {links.website && (
            <a
              href={links.website}
              target={'_blank'}
              className="flex items-center gap-1.5 rounded-lg py-1 text-base transition-colors hover:text-zinc-300 sm:text-sm"
            >
              <Globe className={'h-4 w-4 sm:h-4 sm:w-4'} />
              <span className={'hidden sm:inline-block'}>Visit </span>Website
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target={'_blank'}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-base transition-colors hover:text-zinc-300 sm:text-sm"
            >
              <GitHubIcon className="h-4 w-4 sm:h-4 sm:w-4" />
              <span className={'hidden sm:inline-block'}>Visit </span>GitHub
            </a>
          )}
        </div>
      </div>
      {showDemo && (
        <div className="-mx-3 -mb-3 mt-2 bg-gradient-to-b to-zinc-900 p-3">
          <div className="flex flex-row items-center justify-between gap-2 sm:flex-row sm:gap-0">
            <div className="relative flex flex-row items-center gap-2">
              {images.map((item, counter) => {
                const isActive = counter === activeImage;
                if (!isActive) {
                  return (
                    <button
                      className="w- relative hidden items-center sm:flex"
                      onClick={() => {
                        setActiveImage(counter);
                      }}
                    >
                      <span
                        className={
                          'z-50 cursor-pointer rounded-full bg-zinc-500 p-[5px] hover:bg-zinc-400'
                        }
                      />
                    </button>
                  );
                }

                return (
                  <span className="rounded-full bg-zinc-700 px-3 py-0.5 text-sm">
                    {item.title}
                  </span>
                );
              })}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setActiveImage((prev) => {
                    const next = prev - 1;
                    if (next < 0) {
                      return images.length - 1;
                    }

                    return next;
                  });
                }}
                className="rounded-lg bg-zinc-700 p-1 hover:bg-zinc-600"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => {
                  setActiveImage((prev) => {
                    const next = prev + 1;
                    if (next >= images.length) {
                      return 0;
                    }

                    return next;
                  });
                }}
                className="rounded-lg bg-zinc-700 p-1 hover:bg-zinc-600"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="mt-3 flex flex-row overflow-hidden">
            <Zoom>
              <img
                src={images[activeImage]?.src}
                alt="roadmap.sh"
                className="w-full rounded-lg"
              />
            </Zoom>
          </div>
        </div>
      )}
    </div>
  );
}
