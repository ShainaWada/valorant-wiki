import React from 'react'
import { Agent } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ agent }: { agent: Agent }) => {
    return (
        <Link href={`agents/${agent.uuid}`} className="card">
            <div className="wrapper">
                <Image
                    alt=''
                    src={agent.background}
                    className="cover-image w-auto h-auto"
                    width={200}
                    height={300}
                />
                <Image
                    alt=''
                    src={agent.fullPortrait}
                    className="character-image w-auto h-auto sm:grayscale hover:grayscale-0"
                    width={400}
                    height={600}
                    priority
                />
            </div>
            <label className='title font-Valorant text-center text-lg font-bold mb-2'>
                {agent.displayName}
            </label>
            <Image
                alt=''
                src={agent.fullPortrait}
                className="character w-auto h-auto"
                width={400}
                height={600}
                priority
            />
        </Link>
    )
}

export default Card
