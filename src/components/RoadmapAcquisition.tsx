import { Modal } from './Modal.tsx';
import {TextualLink} from "./TextualLink.tsx";

type RoadmapAcquisitionProps = {
  onClose: () => void;
};

export function RoadmapAcquisition(props: RoadmapAcquisitionProps) {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <div className="animate-slide-fade-up-in rounded-3xl border border-neutral-800 bg-zinc-900 p-4">
        <h2 className="mb-2 text-xl font-medium text-zinc-200">
          Acquisition of roadmap.sh
        </h2>
        <div className="mt-2 flex flex-col gap-2.5 text-base text-zinc-400">
          <p>
            <TextualLink href={'https://roadmap.sh'} text={'roadmap.sh'} target={'_blank'} /> started as a side-project in 2017 and quickly grew to be one of the most popular
            resources for learning anything in tech having over 1+ million
            monthly users, 250k+ GitHub stars, 10k+ teams and 30k+ custom
            roadmaps.
          </p>
          <p>
            Insight partners acquired roadmap.sh in June 2022 and I decided to
            join them full-time. I have been heading the project as a founder
            since then.
          </p>
          <p>
            I am really happy with the acquisition. It not only allowed me to
            focus full-time on roadmap.sh but also helped me take the project to
            the next level. I am working with some amazing people and we are
            committed to making roadmap.sh the best place to learn anything.
          </p>
        </div>
      </div>
    </Modal>
  );
}
