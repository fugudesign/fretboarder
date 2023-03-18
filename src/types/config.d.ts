import { Necks } from '../config/necks';
import { notes } from '../config/tunings';
import { modes } from '../config/modes';

declare global {
  const noteList = notes as const;
  type NoteArray = noteList[number];
  type Note = typeof NoteArray;

  const modeList = modes as const;
  type ModeArray = modeList[number];
  type Mode = typeof ModeArray;

  type TuningType = Note[];

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
      tuning: TuningType;
    };
  }
}

export {};
