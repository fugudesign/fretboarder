import {
  cyan,
  grey,
  indigo,
  lightGreen,
  orange,
  purple,
  red,
  yellow,
} from '@mui/material/colors';

export type Interval =
  | 'T'
  | 'b2'
  | 'M2'
  | 'b3'
  | 'M3'
  | 'P4'
  | 'b5'
  | 'P5'
  | 'b6'
  | 'M6'
  | 'b7'
  | 'M7';

/**
 * Chromatic scale with half-tone intervals
 */
export const chromaticCellIntervals = {
  T: 0,
  b2: 1,
  M2: 2,
  b3: 3,
  M3: 4,
  P4: 5,
  b5: 6,
  P5: 7,
  b6: 8,
  M6: 9,
  b7: 10,
  M7: 11,
};

export const chromaticHTI = {
  T: 0,
  b2: 2,
  M2: 3,
  b3: 5,
  M3: 6,
  P4: 8,
  b5: 9,
  P5: 10,
  b6: 12,
  M6: 13,
  b7: 15,
  M7: 16,
};

export const colorsOfHTI = {
  T: [grey[900], grey[900]],
  b2: [yellow[700], grey[900]],
  M2: [yellow[500], grey[900]],
  b3: [red[700], grey[900]],
  M3: [red[500], grey[900]],
  P4: [cyan[500], grey[900]],
  b5: [orange[700], grey[900]],
  P5: [lightGreen[500], grey[900]],
  b6: [purple[600], grey[900]],
  M6: [purple[400], grey[900]],
  b7: [indigo[600], grey[900]],
  M7: [indigo[400], grey[900]],
};

export const modesIntervals = {
  chromatic: [
    'T',
    'b2',
    'M2',
    'b3',
    'M3',
    'P4',
    'b5',
    'P5',
    'b6',
    'M6',
    'b7',
    'M7',
  ],
  major: ['T', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
  majorPentatonic: ['T', 'M2', 'M3', 'P5', 'M6'],
  minor: ['T', 'M2', 'b3', 'P4', 'P5', 'b6', 'b7'],
  minorPentatonic: ['T', 'b3', 'P4', 'P5', 'b7'],
  minorHarmonic: ['T', 'M2', 'b3', 'P4', 'P5', 'b6', 'M7'],
  minorMelodic: ['T', 'M2', 'b3', 'P4', 'P5', 'M6', 'M7'],
  alteredDominant: ['T', 'b2', 'b3', 'M3', 'b5', 'b6', 'b7'],
  blues: ['T', 'b3', 'P4', 'b5', 'P5', 'b7'],
  dorian: ['T', 'M2', 'b3', 'P4', 'P5', 'M6', 'b7'],
  locrian: ['T', 'b2', 'b3', 'P4', 'b5', 'b6', 'b7'],
  lydian: ['T', 'M2', 'M3', 'b5', 'P5', 'M6', 'M7'],
  myxolidian: ['T', 'M2', 'M3', 'P4', 'P5', 'M6', 'b7'],
  phrygian: ['T', 'b2', 'b3', 'P4', 'P5', 'b6', 'b7'],
};

export type Mode = keyof typeof modesIntervals;

export const modes = Object.keys(modesIntervals) as unknown as Mode[];

export const modesHTIntervals = Object.entries(modesIntervals).reduce(
  (res, [key, mode]) => ({
    ...res,
    [key]: mode.map((int) => chromaticCellIntervals[int as Interval]),
  }),
  {} as Record<Mode, number[]>
);
