import {
  blue,
  cyan,
  green,
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
export const chromaticHTI = {
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

export const colorsOfHTI = {
  T: grey[900],
  b2: yellow[500],
  M2: yellow[600],
  b3: red[500],
  M3: red[600],
  P4: cyan[500],
  b5: orange[500],
  P5: lightGreen[500],
  b6: purple[500],
  M6: purple[600],
  b7: indigo[500],
  M7: indigo[600],
};

export const modesIntervals = {
  major: ['T', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
  minor: ['T', 'M2', 'b3', 'P4', 'P5', 'b6', 'b7'],
  minorMelodic: ['T', 'M2', 'b3', 'P4', 'P5', 'M6', 'M7'],
  minorHarmonic: ['T', 'M2', 'b3', 'P4', 'P5', 'b6', 'M7'],
  dorian: ['T', 'M2', 'b3', 'P4', 'P5', 'M6', 'b7'],
  myxolidian: ['T', 'M2', 'M3', 'P4', 'P5', 'M6', 'b7'],
  blues: ['T', 'b3', 'P4', 'b5', 'P5', 'b7'],
  pentatonicMinor: ['T', 'b3', 'P4', 'P5', 'b7'],
};

export type Mode = keyof typeof modesIntervals;

export const modes = Object.keys(modesIntervals) as unknown as Mode[];

export const modesHTIntervals = Object.entries(modesIntervals).reduce(
  (res, [key, mode]) => ({
    ...res,
    [key]: mode.map((int) => chromaticHTI[int as Interval]),
  }),
  {} as Record<Mode, number[]>
);
