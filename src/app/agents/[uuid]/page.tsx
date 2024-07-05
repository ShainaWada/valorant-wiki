'use client';
import { useAgent } from '@/api/getAgent';
import Loading from '@/components/Loading';
import { EnglishName } from '@/constant/agent';
import NotFound from '@/not-found';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Agent = ({ params }: { params: { uuid: string } }) => {
  const id = params.uuid;
  const { data, isLoading, isError } = useAgent(id);

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

  const englishName = data?.displayName ? EnglishName[data.displayName] : '';

  return (
    <>
      <div className="flex w-full h-full bg-gradient-card-detail relative text-white">
        {data?.background ? (
          <Image
            src={data?.background}
            alt={`${data.displayName}の背景画像`}
            width={200}
            height={100}
            priority
            className="absolute bg-gradient-container right-4 size-auto animate-fade-down"
          />
        ) : null}
        <Link href={'../../agents'}>
          <AiOutlineSwapLeft className="aspect-square z-50 fill-white border border-white size-8 absolute top-12 left-12 animate-spin animate-once" />
        </Link>
        {data?.fullPortrait ? (
          <Image
            src={data?.fullPortrait}
            alt={`${data.displayName}の画像`}
            width={500}
            height={100}
            className="absolute top-12 right-12 size-auto animate-fade-right"
            priority
          />
        ) : null}
        <div className="mt-auto mx-2 z-20 bg-gradient-detail pb-3">
          <div className="relative animate-fade-right animate-delay-150">
            <h2 className="text-[clamp(3.75rem,2.932rem+4.09vw,6rem)] font-Valorant w-fit text-shadow">
              {englishName}
            </h2>
            <div className="flex items-center justify-center gap-2 absolute bottom-0 left-2 mb-1">
              <span className="align-baseline text-lg italic sm:bottom-2.5 ">
                {data?.role.displayName}
              </span>
              {data?.role.displayIcon ? (
                <Image
                  src={data.role.displayIcon}
                  alt=""
                  width={50}
                  height={50}
                  className="object-cover size-5"
                />
              ) : null}
            </div>
          </div>

          {data?.description ? (
            <p className="mb-2 w-[80%]  sm:max-w-[50%] mx-auto sm:mx-0 sm:mr-auto backdrop-filter bg-slate-800/50 p-3 border border-red-500 animate-fade-right animate-delay-150">
              {data?.description}
            </p>
          ) : (
            ''
          )}
          <Accordion
            type="single"
            collapsible
            className="w-[80%] mx-auto animate-fade-down animate-delay-150"
          >
            {data?.abilities.map((ability, idx) => {
              return (
                <div key={idx}>
                  <AccordionItem
                    value={ability.displayName}
                    className=" animate-fade-up animate-ease-out animate-delay-150"
                  >
                    {ability.displayIcon ? (
                      <AccordionTrigger className="">
                        {' '}
                        <Image
                          src={ability.displayIcon}
                          width={75}
                          height={75}
                          alt=""
                          className="border border-red-500 p-1 aspect-square size-[clamp(3rem,2.818rem+0.91vw,3.5rem)]"
                        />{' '}
                        {ability.displayName}
                      </AccordionTrigger>
                    ) : null}
                    <AccordionContent className="bg-gradient-card-bottom">
                      {ability.description}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Agent;
