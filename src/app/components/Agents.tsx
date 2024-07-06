'use client';
import { useAgents } from '@/api/getAgents';
import Card from './Card';
import Loading from './Loading';
import NotFound from '@/not-found';
import Link from 'next/link';

const Agents = () => {
  const { data: agents, isLoading, isError } = useAgents();

  if (isLoading) return <Loading />;

  if (isError) return <NotFound />;

  return (
    <>
      <div className="flex flex-col text-[clamp(1rem,-0.091rem+5.45vw,4rem)] font-semibold text-red-600">
        <Link href={'/'}>
          <h1 className="font-Valorant text-center text-shadow-white">Valorant Agents</h1>
        </Link>
        <div className="grid place-content-center grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 grid-rows-5 gap-y-8 gap-x-2 overflow-auto pt-9">
          {agents?.map((agent) => {
            return (
              <Card key={agent.uuid} agent={agent} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Agents;
