import type { SkillCategory } from '../types';

/** The three discipline cards in the Skills section. */
export const skills: SkillCategory[] = [
  {
    icon: 'i-camera',
    title: 'CINEMATOGRAPHY',
    items: ['Camera Operating', 'Focus Pulling', 'Camera Assisting', 'Visual Concept Dev'],
  },
  {
    icon: 'i-layers',
    title: 'PRODUCTION',
    items: ['Studio & Set Operations', 'Lighting Setup', 'Technical Support', 'Production Workflow'],
  },
  {
    icon: 'i-clapperboard',
    title: 'DIRECTORIAL',
    items: ['Creative Direction', 'Narrative Identity', 'Team Collaboration', 'Problem-Solving'],
  },
];
