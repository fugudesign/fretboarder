import NoteMark, { noteSize } from './NoteMark';

import Box from '@mui/material/Box';
import { FC } from 'react';
import { BaseNote, Note, notes } from 'src/config/notes';
import { useAppContext } from 'src/contexts/appContext';
import { useGuitarConfig } from 'src/hooks/useGuitarConfig';
import * as Tone from 'tone';

type ScaleStringProps = {
  stringNote: Note;
  stringIndex: number;
};

const synth = new Tone.PolySynth(Tone.Synth).toDestination();

const ScaleString: FC<ScaleStringProps> = ({ stringNote, stringIndex }) => {
  const { type, modeNotes, modeIntervals } = useAppContext();
  const { config, stringPositions, fretPositions } = useGuitarConfig(type);

  const fretCount = config.frets.count + 1;
  const idx = notes.findIndex((n) => n === stringNote);
  const fromIdx = notes.slice(idx, notes.length);
  const beforeIdx = notes.slice(0, idx);
  const rebased = [...fromIdx, ...beforeIdx];
  const stringNotes = [...rebased, ...rebased].slice(0, fretCount);

  const calculatePosition = (i: number) => {
    const caseNumber = i - 1;
    const typePos = type === 'lapsteel' ? 1 : 2;
    const isFirstCase = caseNumber < 0;
    const noteOffset = noteSize / 2;

    return isFirstCase
      ? fretPositions[0] - noteOffset * 4
      : fretPositions[caseNumber] +
          (fretPositions[caseNumber + 1] - fretPositions[caseNumber]) / typePos -
          noteOffset;
  };

  const playNote = (note: string) => {
    const now = Tone.now();

    synth.set({ oscillator: { type: 'amtriangle' } });
    synth.triggerAttackRelease(note, '8n', now);
  };

  const isNoteInMode = (note: BaseNote) => modeNotes.includes(note);

  const noteInterval = (note: BaseNote) => {
    const i = modeNotes.indexOf(note);
    return i >= 0 ? modeIntervals[i] : undefined;
  };

  const formatNoteToDisplay = (note: Note) => note.replace(/\d/g, '') as BaseNote;

  return (
    <Box
      key={`s${stringIndex}${stringNote}-line`}
      id={`s${stringIndex}-${stringNote}-line`}
      className="string"
      sx={{
        bottom: stringPositions[stringIndex] - noteSize / 2,
      }}
    >
      {stringNotes.map((note, noteIndex) => {
        const baseNote = note.replace(/\d/g, '') as BaseNote;

        return (
          (noteIndex === 0 || isNoteInMode(baseNote)) && (
            <NoteMark
              key={`s${stringIndex}${stringNote}-n${noteIndex}${note}`}
              id={`s${stringIndex}-${stringNote}-n${noteIndex}-${note}`}
              className="note"
              sx={{
                position: 'absolute',
                top: 0,
                left: calculatePosition(noteIndex),
              }}
              emptyString={noteIndex === 0}
              note={formatNoteToDisplay(note)}
              interval={noteInterval(baseNote)}
              onClick={() => playNote(note)}
            />
          )
        );
      })}
    </Box>
  );
};

export default ScaleString;
