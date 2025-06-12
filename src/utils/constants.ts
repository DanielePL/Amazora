export const APP_CONFIG = {
  name: 'Amazora',
  version: '0.1.0',
  description: 'Menopause Fitness & Wellness App for Women 40+',
};

export const STORAGE_KEYS = {
  FIRST_LAUNCH: 'first_launch',
  USER_DATA: 'user_data',
  ONBOARDING_COMPLETE: 'onboarding_complete',
  MENOPAUSE_STAGE: 'menopause_stage',
  USER_GOALS: 'user_goals',
};

export const MENOPAUSE_STAGES = [
  {
    id: 'perimenopause',
    title: 'Perimenopause',
    description: 'Irregular periods, mood changes, hot flashes beginning',
    ageRange: 'Usually 40-51',
  },
  {
    id: 'menopause',
    title: 'Menopause',
    description: '12 months without a period, full hormonal changes',
    ageRange: 'Usually 51+',
  },
  {
    id: 'postmenopause',
    title: 'Post-Menopause',
    description: 'Years after menopause, focus on long-term health',
    ageRange: '55+',
  },
];

export const HEALTH_GOALS = [
  { id: 'symptoms', title: 'Manage Symptoms', icon: '🌡️' },
  { id: 'fitness', title: 'Stay Active', icon: '💪' },
  { id: 'weight', title: 'Healthy Weight', icon: '⚖️' },
  { id: 'sleep', title: 'Better Sleep', icon: '😴' },
  { id: 'mood', title: 'Mood Balance', icon: '🧘‍♀️' },
  { id: 'community', title: 'Find Support', icon: '👥' },
];