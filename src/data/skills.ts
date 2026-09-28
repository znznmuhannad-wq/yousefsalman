import type { SkillCategory } from '../types';

/** The three discipline cards in the Skills section. */
export const skills: SkillCategory[] = [
  {
    icon: 'i-camera',
    title: 'CINEMATOGRAPHY',
    items: ['Camera Operating', 'Focus Pulling', 'Visual Concept Dev'],
  },
  {
    icon: 'i-layers',
    title: 'PRODUCTION',
    items: ['Set Etiquette', 'Problem Solving and Communication', 'Technical Support', 'Production Workflow'],
  },
  {
    icon: 'i-clapperboard',
    title: 'DIRECTING',
    items: ['Creative Direction', 'Narrative Identity', 'Team Collaboration', 'Problem-Solving'],
  },
];
