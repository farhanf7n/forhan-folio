import { useState } from 'react';
import { WhyLeftZalando } from './WhyLeftZalando.tsx';
import { FoundingTradeling } from './FoundingTradeling.tsx';
import { FoundingAlmosafer } from './FoundingAlmosafer.tsx';
import { cn } from '../utils/cn.ts';
import { MyFirstJob } from './MyFirstJob.tsx';
import { RoadmapAcquisition } from './RoadmapAcquisition.tsx';

type EmploymentButtonProps = {
  text: string;
  className?: string;
  type:
    | 'zalandoLeft'
    | 'foundingTradeling'
    | 'foundingAlmosafer'
    | 'myFirstJob'
    | 'roadmapAcquisition';
};

export function EmploymentButton(props: EmploymentButtonProps) {
  const { text, className = '', type } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && type === 'zalandoLeft' && (
        <WhyLeftZalando onClose={() => setIsOpen(false)} />
      )}
      {isOpen && type === 'foundingTradeling' && (
        <FoundingTradeling onClose={() => setIsOpen(false)} />
      )}
      {isOpen && type === 'foundingAlmosafer' && (
        <FoundingAlmosafer onClose={() => setIsOpen(false)} />
      )}
      {isOpen && type === 'myFirstJob' && (
        <MyFirstJob onClose={() => setIsOpen(false)} />
      )}
      {isOpen && type === 'roadmapAcquisition' && (
        <RoadmapAcquisition onClose={() => setIsOpen(false)} />
      )}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className={cn(
          'flex items-center gap-1 rounded-3xl px-2 py-0.5 text-xs transition-colors',
          {
            'border border-green-800 text-green-600 hover:border-green-600 hover:text-green-300':
              type === 'zalandoLeft',
            'bg-yellow-400 text-black hover:bg-yellow-600 ':
              type !== 'zalandoLeft',
          },
          className,
        )}
      >
        {text}
      </button>
    </>
  );
}
