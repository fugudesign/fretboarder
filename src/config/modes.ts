/**
 * Chromatic scale with half-tone intervals
 */
export const chromaticHTI = {
  T: 0,
  '2m': 1,
  '2M': 2,
  '3m': 3,
  '3M': 4,
  '4j': 5,
  b5: 6,
  '5j': 7,
  '6m': 8,
  '6M': 9,
  '7m': 10,
  '7M': 11,
};

export type HalfToneInterval = typeof chromaticHTI;

export const modesIntervals = {
  major: ['T', '2M', '3M', '4j', '5j', '6M', '7M'],
  minor: ['T', '2M', '3m', '4j', '5j', '6m', '7m'],
  minorMelodic: ['T', '2M', '3m', '4j', '5j', '6M', '7M'],
  minorHarmonic: ['T', '2M', '3m', '4j', '5j', '6m', '7M'],
  dorian: ['T', '2M', '3m', '4j', '5j', '6M', '7m'],
  myxolidian: ['T', '2M', '3M', '4j', '5j', '6M', '7m'],
  blues: ['T', '3m', '4j', 'b5', '5j', '7m'],
};

export const modes = Object.keys(modesIntervals);

export const modesHTIntervals = Object.entries(modesIntervals).reduce(
  (res, [key, mode]) => ({
    ...res,
    [key]: mode.map((int) => chromaticHTI[int as keyof HalfToneInterval]),
  }),
  {} as Record<Mode, number[]>
);
