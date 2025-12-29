// festival.config.ts
export interface FestivalConfig {
  name: string;
  start: string; // MM-DD
  end?: string;

  // Effects
  effect: 'confetti' | 'fireworks' | 'flowers' | 'custom';

  // Toggles
  blast?: boolean; // full screen blast on load
  headerEffect?: boolean; // small continuous header effect
  messageEnabled?: boolean; // show custom message

  // Custom message
  message?: string; // e.g. "Happy New Year from RiseRoots Family"
}
export const FESTIVALS: FestivalConfig[] = [
    {
    name: 'New Year',
    start: '12-25',
    end: '12-31',
    effect: 'confetti',
    blast: true,
    headerEffect: true,
    messageEnabled: true,
    message: 'Happy Christmas from Dharmala Family 🎉',
  },
  {
    name: 'New Year',
    start: '01-01',
    effect: 'confetti',
    blast: true,
    headerEffect: true,
    messageEnabled: true,
    message: 'Happy New Year from RiseRoots Family 🎉',
  },
  {
    name: 'Pongal',
    start: '01-14',
    end: '01-16',
    effect: 'flowers',
    blast: true,
    headerEffect: true,
    messageEnabled: true,
    message: 'Happy Pongal 🌾 from RiseRoots Family',
  },
  {
    name: 'Diwali',
    start: '11-01',
    effect: 'fireworks',
    blast: true,
    headerEffect: true,
    messageEnabled: true,
    message: 'Wishing you a Prosperous Diwali ✨',
  },
];
