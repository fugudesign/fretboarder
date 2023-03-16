import { Necks } from '../config/necks';

declare global {
  type NeckType = Necks;

  interface NeckConfig {
    board: {
      width: number;
      height: number;
    };
    markers: {
      numbers: number[];
      size: number;
    };
    nut: {
      width: number;
    };
    frets: {
      count: number;
      width: number;
    };
    strings: {
      sizes: number[];
      margin: number;
    };
  }
}

export {};
