import { Necks } from '../config/necks';

declare global {
  type TuningType = BaseNote[];

  type Tuning = {
    name: string;
    notes: Note[];
  };

  type Tunings = Record<string, Tuning>;

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
    defaults: {
      tuning: Tuning;
    };
  }
}

export {};
