import { Modal } from './Modal.tsx';

type FoundingAlmosaferProps = {
  onClose: () => void;
};

export function FoundingAlmosafer(props: FoundingAlmosaferProps) {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <div className="animate-slide-fade-up-in rounded-3xl border border-neutral-800 bg-zinc-900 p-4">
        <h2 className="mb-2 text-xl font-medium text-zinc-200">
          Founding Engineer at Almosafer
        </h2>
        <div className="flex flex-col gap-2 text-base text-zinc-400">
          <p>
            I was the pre-launch hire; employee number 5 in the engineering team
            and was responsible for building the first version of the product. I
            contributed to the entire stack, from the backend to the frontend,
            and infrastructure.
          </p>
          <p>
            When I left the company after ~4 years, it had grown to over 1000
            employees (100+ engineers), we were getting 1M+ monthly visitors,
            and we had 40k+ orders per day.
          </p>
        </div>
      </div>
    </Modal>
  );
}
