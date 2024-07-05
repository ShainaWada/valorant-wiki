import Agents from '@/components/Agents';
import ViewContainer from '@/components/ViewContainer';
import ViewContent from '@/components/ViewContent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Valorant | Agents',
  description:
    'Valorantに登場するエージェントは、それぞれユニークな能力を持ち、独特のプレイスタイルを持っています。エージェントのページでは、各キャラクターの詳細なプロフィール、スキル、経歴、そして潜在能力を最大限に引き出すための戦略を紹介しています。あなたのプレイスタイルに最適なエージェントを使いこなし、チームを勝利に導きましょう。',
};

const Agent = () => {
  return (
    <ViewContainer>
      <ViewContent>
        <Agents />
      </ViewContent>
    </ViewContainer>
  );
};

export default Agent;
