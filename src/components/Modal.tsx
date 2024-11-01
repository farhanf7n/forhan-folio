import type { ReactNode } from 'react';
import { useRef } from 'react';
import { useOutsideClick } from '../hooks/use-outside-click.ts';
import { useKeydown } from '../hooks/use-keydown.ts';
import { X } from 'lucide-react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const { children, onClose } = props;

  const bodyRef = useRef<HTMLDivElement>(null);

  useKeydown('Escape', () => {
    onClose();
  });

  useOutsideClick(bodyRef, () => {
    onClose();
  });

  return (
    <div
      tabIndex={-1}
      className="popup fixed left-0 right-0 top-0 z-[9999] flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-zinc-800/90"
    >
      <div className="relative h-full w-full max-w-lg p-4 md:h-auto">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 animate-slide-fade-up-in rounded-full p-2 text-zinc-600 transition-colors hover:text-zinc-300"
        >
          <X size={24} />
        </button>
        <div ref={bodyRef} className="popup-body relative rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  );
}
