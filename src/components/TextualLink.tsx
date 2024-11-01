import { cn } from '../utils/cn.ts';

type TextualLinkProps = {
  href: string;
  text: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  isYellow?: boolean;
};

export function TextualLink(props: TextualLinkProps) {
  const { href, text, target, isYellow = false } = props;

  return (
    <a
      href={href}
      className={cn(
        'font-medium underline decoration-2 underline-offset-2 transition-colors hover:text-zinc-200',
        {
          'text-nowrap rounded-md px-1.5 py-0.5 text-yellow-300 no-underline hover:bg-yellow-400 hover:text-black':
            isYellow,
        },
      )}
      target={target}
    >
      {text}
    </a>
  );
}
