import { ReactNode } from 'react';

export type Role = {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
};

export type Ability = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: null | string;
};

export type MediaList = {
  id: number;
  wave: string;
};

export type VoiceLine = {
  mediaList: MediaList[];
};

export type Agent = {
  uuid: string;
  displayName: string;
  englishName?: string;
  description: string;
  displayIcon: string;
  fullPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  role: Role;
  abilities: Ability[];
  voiceLine: VoiceLine;
};

export type ContainerTypeProps = {
  children: ReactNode;
};

export type ViewContentProps = {
  children: ReactNode;
};

export type ViewContainerProps = {
  children: ReactNode;
};
