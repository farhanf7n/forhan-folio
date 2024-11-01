import { ChevronsLeftRight } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import { cn } from '../utils/cn.ts';

type ExpandButtonProps = {
  text?: string;
  children?: ReactNode;
  isExpanded?: boolean;
};

export function ExpandButton(props: ExpandButtonProps) {
  const { children, isExpanded = false, text } = props;

  const hasText = !!text;

  const [expanded, setExpanded] = useState(isExpanded);

  return (
    <>
      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className={cn(
            'cursor-pointer rounded-md bg-zinc-700 px-1 py-[0.5] text-sm font-normal text-zinc-400 transition-colors hover:bg-zinc-500 hover:text-zinc-50 hover:opacity-100',
            {
              'relative -top-[2px] ml-1.5 opacity-80': !hasText,
              'block w-full bg-gradient-to-l from-zinc-800 py-2 sm:py-1.5': hasText,
            },
          )}
        >
          <ChevronsLeftRight
            size={17}
            className="relative -top-[1.35px] inline-block"
          />
          {hasText && <span className="ml-1">{text}</span>}
        </button>
      )}
      <span
        className={cn({
          inline: expanded,
          hidden: !expanded,
          'animate-fade-appear text-green-400': !hasText,
        })}
      >
        {children}
      </span>
    </>
  );
}
