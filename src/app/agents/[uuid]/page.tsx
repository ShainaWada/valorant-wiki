"use client";
import { useAgent } from '@/api/getAgent';
import Loading from '@/components/Loading';
import { EnglishName } from '@/constant/agent';
import NotFound from '@/not-found';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSwapLeft } from "react-icons/ai";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"




const Agent = ({ params }: { params: { uuid: string } }) => {
  const id = params.uuid;
  const { data, isLoading, isError } = useAgent(id);

  if (isLoading) return <Loading />;
  if (isError) return <NotFound />;

  const englishName = data?.displayName ? EnglishName[data.displayName] : "";

  return (
    <>
      <div className='flex w-full h-full bg-gradient-card-detail relative text-white'>
        <Image src={data?.background ? data.background : ""} alt='' width={200} height={100} className='absolute bg-gradient-container right-4 size-auto' />
        <Link href={"../../agents"}><AiOutlineSwapLeft className='aspect-square z-50 fill-white border border-white size-8 absolute top-12 left-12' /></Link>
        <Image src={data?.fullPortrait ? data.fullPortrait : ""} alt='' width={500} height={100} className='absolute top-12 size-auto' priority />
        <div className='mt-auto mx-2 z-20 bg-gradient-detail pb-3'>
          <h2 className='text-[clamp(3.75rem,2.932rem+4.09vw,6rem)] font-Valorant relative'>{englishName}<span className=' absolute bottom-0 left-2 text-lg italic sm:bottom-2.5 '>{data?.role.displayName}</span></h2>
          <p className='mb-2 w-[80%]  sm:max-w-[50%] mr-auto backdrop-filter bg-slate-800/50 p-3 border border-red-500'>{data?.description}</p>
          <h3 className='text-yellow-200 text-xl font-Valorant'>Abilities</h3>
          <Accordion type='single' collapsible className='w-[80%] mx-auto'>
            {data?.abilities.map((ability, idx) => {
              return (
                <div key={idx}>
                  <AccordionItem value={ability.displayName}>
                    <AccordionTrigger><Image src={ability.displayIcon} width={50} height={50} alt='' className='border border-red-500 p-1' />{ability.displayName}</AccordionTrigger>
                    <AccordionContent>
                      {ability.description}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              )
            })}
          </Accordion>
        </div>
      </div >
    </>
  )
};

export default Agent
