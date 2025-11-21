export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export enum AnimeColor {
  NeonPurple = 'text-purple-500',
  NeonBlue = 'text-cyan-400',
  NeonRed = 'text-red-500',
  NeonYellow = 'text-yellow-400'
}

export interface DesignConceptResponse {
  concept: string;
  visualStyle: string;
  tagline: string;
}