export const specialChars = ['#'];

export const noteList = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
] as const;

export const notes = [...noteList];

export type Notes = typeof notes;
export type Note = Notes[number];
