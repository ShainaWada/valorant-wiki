import Link from 'next/link';
import ViewContainer from './components/ViewContainer';
import ViewContent from './components/ViewContent';

export default function NotFound() {
  return (
    <ViewContainer>
      <ViewContent>
        <section className="bg-gradient-weapon-card flex h-full w-[80%] items-center justify-center rounded-lg md:mt-10 md:h-[80%]">
          <article className="flex flex-col items-center justify-center">
            <h1 className="text-8xl font-bold text-white md:text-9xl">404</h1>
            <h2 className="text-2xl font-bold uppercase text-white md:text-3xl">
              Something went wrong...
            </h2>
            <Link
              href={'/'}
              className="mt-6 w-full border-2 border-secondary bg-primary-700 p-1 text-center font-bold uppercase text-white transition-all ease-in-out hover:border-white"
            >
              ホームへ戻る
            </Link>
          </article>
        </section>
      </ViewContent>
    </ViewContainer>
  );
}
