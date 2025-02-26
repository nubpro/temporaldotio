import Link from 'next/link';
import DirectionalControl from './DirectionalControl';

const Stack = ({ content, link, title }) => (
  <div className="stack after:transition-all text-white relative">
    <Link href={link}>
      <a>
        <div className="stack__content transition-all h-full w-full p-4 bg-black rounded-lg relative border-2 flex flex-col">
          <h2 className="text-2xl tracking-wide font-bold">{title}</h2>
          <p className="flex-grow font-light my-4 text-lg">{content}</p>
          <div className="nav-link text-center text-temporalblue">Learn More</div>
        </div>
      </a>
    </Link>
  </div>
);

const USE_CASES = [
  {
    link: '/usecases#orchestration',
    content: (
      <div>
        Define{' '}
        <span className="text-temporalblue">
          retries, rollbacks, cleanup, and even human-in-the-loop
        </span>{' '}
        steps in the case of failure. With end to end visibility across multiple services.
      </div>
    ),
    title: 'Microservices Orchestration'
  },
  {
    content: (
      <div>
        <span className="text-temporalblue">
          Reliability, consistency, failure compensation, long running operations, and distributed
          transactions
        </span>{' '}
        for your most critical financial operations.
      </div>
    ),
    link: '/usecases#transactions',
    title: 'Financial Transactions'
  },
  {
    content: (
      <div>
        When ad-hoc provisioning doesn't scale and Kubernetes or Fargate doesn't give you enough
        control, <span className="text-temporalblue">write your own control plane</span> in
        languages you know best.
      </div>
    ),
    link: '/usecases#provisioning',
    title: 'Resource Provisioning'
  },
  {
    content: (
      <div>
        Reliable polling that is as simple or sophisticated as you need, at massive scale. Imagine{' '}
        <span className="text-temporalblue">100s of millions parallel cron jobs</span> that survive
        any machine failure.
      </div>
    ),
    link: '/usecases#monitoring',
    title: 'Monitoring'
  }
];

const StackedUseCases = () => (
  <section
    id="use-cases"
    className={`
    container mx-auto
    px-8 py-16
    mt-12 mb-24
    `}>
    <h2 className="text-center text-3xl font-bold sm:text-6xl mb-16">Use Cases</h2>
    <div className="grid gap-10 md:grid-cols-2 lg:w-800 mx-auto">
      {USE_CASES.map((useCase) => (
        <Stack
          content={useCase.content}
          link={useCase.link}
          title={useCase.title}
          key={useCase.link}
        />
      ))}
    </div>
    <div className="mt-16 flex justify-center">
      <DirectionalControl secondary href="/usecases">
        More Use Cases
      </DirectionalControl>
    </div>
  </section>
);

export default StackedUseCases;
