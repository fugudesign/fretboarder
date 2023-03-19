import { specialChars } from 'src/config/notes';

export const _note = (note: Note) => {
  return note.replace(/#/g, `<i>♯</i>`);
};

export const parseTuning = (input: string) =>
  input
    .split('')
    .reduce(
      (res, char, i) =>
        specialChars.includes(char)
          ? [...res.slice(0, -1), `${res[i - 1]}${char}`]
          : [...res, char],
      [] as TuningType
    );
