import { Modal } from './Modal.tsx';

type MyFirstJobProps = {
  onClose: () => void;
};

export function MyFirstJob(props: MyFirstJobProps) {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <div className="animate-slide-fade-up-in rounded-3xl border border-neutral-800 bg-zinc-900 p-4">
        <h2 className="mb-2 text-xl font-medium text-zinc-200">My First Job</h2>
        <div className="mt-2 flex flex-col gap-2.5 text-base text-zinc-400">
          <p>
            There were only two developers in this company: one who developed
            the Desktop Application for the core product of the company, and the
            other who was a recent hire tasked with developing the Web version
            of the same product. I was hired as an intern to assist the Web
            Developer in developing the Web version of the product.
          </p>
          <p>
            The web developer decided to leave the company after just a week of
            my joining. With no choice left, I was given the responsibility to
            develop the web version of the product all by myself. I was able to
            do it successfully in just two months, and the company was happy
            with the result. The product was launched and it was a success.
          </p>
          <p>
            I owe a lot to the web developer for leaving the company so soon :)
            I was able to learn a lot because of the trust the company was
            forced to put in me.
          </p>
        </div>
      </div>
    </Modal>
  );
}
