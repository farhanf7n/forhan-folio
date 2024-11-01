import { Modal } from './Modal.tsx';

type FoundingTradelingProps = {
  onClose: () => void;
};

export function FoundingTradeling(props: FoundingTradelingProps) {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <div className="animate-slide-fade-up-in rounded-3xl border border-neutral-800 bg-zinc-900 p-4">
        <h2 className="mb-2 text-xl font-medium text-zinc-200">
          Founding Engineer at Tradeling
        </h2>
        <div className="flex flex-col gap-2 text-base text-zinc-400">
          <p>
            I was the employee #3 at Tradeling. I helped build and launch the
            platform in the first 100 days and then helped scale the team to 50+
            engineers.
          </p>
          <p>
            I was managing 3 different teams "Buyer Center", "Seller Center" and
            "Catalog PIM" and was also contributing to the overall architecture
            and design of the platform.
          </p>
          <p>
            I stayed at Tradeling for ~2 years and when I left, the company had
            +1m products, thousands of buyers and sellers and was doing millions
            in GMV.
          </p>
        </div>
      </div>
    </Modal>
  );
}
