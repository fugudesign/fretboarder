const classic: NeckConfig = {
  board: {
    width: 1200,
    height: 180,
  },
  markers: {
    numbers: [3, 5, 7, 9, 12, 15, 17, 19],
    size: 5,
  },
  nut: {
    width: 10,
  },
  frets: {
    count: 20,
    width: 2,
  },
  strings: {
    sizes: [0.5, 1, 1.5, 2, 2, 3],
    margin: 10,
  },
  defaults: {
    tuning: ['E', 'A', 'D', 'G', 'B', 'E'],
  },
};

const lapsteel: NeckConfig = {
  board: {
    width: 1200,
    height: 180,
  },
  markers: {
    numbers: [3, 5, 7, 9, 12, 15, 17, 19],
    size: 5,
  },
  nut: {
    width: 10,
  },
  frets: {
    count: 20,
    width: 2,
  },
  strings: {
    sizes: [0.5, 1, 1.5, 2, 2, 3],
    margin: 10,
  },
  defaults: {
    tuning: ['D', 'A', 'D', 'F#', 'A', 'D'],
  },
};

const bass: NeckConfig = {
  board: {
    width: 1200,
    height: 130,
  },
  markers: {
    numbers: [3, 5, 7, 9, 12, 15, 17, 19],
    size: 5,
  },
  nut: {
    width: 10,
  },
  frets: {
    count: 24,
    width: 2,
  },
  strings: {
    sizes: [1, 2, 3, 4],
    margin: 10,
  },
  defaults: {
    tuning: ['E', 'A', 'D', 'G'],
  },
};

const ukulele: NeckConfig = {
  board: {
    width: 1200,
    height: 150,
  },
  markers: {
    numbers: [5, 7, 9, 12, 15],
    size: 5,
  },
  nut: {
    width: 10,
  },
  frets: {
    count: 18,
    width: 2,
  },
  strings: {
    sizes: [0.5, 1, 2, 1],
    margin: 10,
  },
  defaults: {
    tuning: ['G', 'C', 'E', 'A'],
  },
};

const necks = {
  classic,
  lapsteel,
  bass,
  ukulele,
};

export type Necks = keyof typeof necks;

export const neckTypes = Object.keys(necks) as NeckType[];

export default necks;
