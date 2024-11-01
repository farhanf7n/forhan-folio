import type { LucideIcon } from 'lucide-react';

type NavigationButtonProps = {
  href?: string;
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  additionalAttributes?: Record<string, string>;
};
export function NavigationButton(props: NavigationButtonProps) {
  const {
    href = '',
    icon: Icon,
    isActive = false,
    label,
    target = '_self',
    additionalAttributes = {},
  } = props;

  const classes =
    'relative flex items-center gap-2 py-3 pr-1 text-sm transition-colors hover:text-zinc-300 sm:text-base';
  if (!href) {
    return (
      <button type="button" className={classes} {...additionalAttributes}>
        <Icon size="16" />
        {label}
      </button>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      target={target}
      data-astro-prefetch={target === '_self' ? 'load' : 'tap'}
      {...additionalAttributes}
    >
      <Icon size="16" />
      {label}

      {isActive && (
        <span className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-zinc-400/0 via-zinc-400/40 to-zinc-400/0"></span>
      )}
    </a>
  );
}
