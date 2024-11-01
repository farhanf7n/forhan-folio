import { Modal } from './Modal.tsx';
import { TextualLink } from './TextualLink.tsx';

type WhyLeftZalandoProps = {
  onClose: () => void;
};

export function WhyLeftZalando(props: WhyLeftZalandoProps) {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <div className="animate-slide-fade-up-in rounded-3xl border border-neutral-800 bg-zinc-900 p-4">
        <h2 className="mb-2 text-xl font-medium text-zinc-200">
          Why I Left Zalando?
        </h2>
        <p className="mt-2 text-zinc-400 text-base">
          This was probably the shortest stint of my career. I was having
          discussions with{' '}
          <TextualLink
            href={
              'https://www.google.com/search?q=insight+partners&rlz=1C5CHFA_enGB1062GB1062&oq=insight+partners&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGMcBGLEDGNEDGIAEMgYIAhBFGDsyBggDEEUYOzIHCAQQABiABDIGCAUQRRg9MgYIBhBFGDwyBggHEEUYPNIBCDE0NzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
            }
            text={'Insight Partners'}
            target={'_blank'}
          />{' '}
          about the acquisition of{' '}
          <TextualLink
            href={'https://roadmap.sh'}
            text={'roadmap.sh'}
            target={'_blank'}
          />{' '}
          at that time. I was nearing the end of my probation period and staying
          would have meant that I would have to commit to Zalando for a longer
          period. Since roadmap.sh was already making some money so I decided to
          take the leap and focus on it full-time thinking that if the
          acquisition doesn't work out, I can always find another job.
        </p>
      </div>
    </Modal>
  );
}
