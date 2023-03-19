import Note, { noteSize } from './Note';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { FC } from 'react';
import { notes } from 'src/config/notes';
import sx from '../Viewer.styles';
import { useAppContext } from 'src/contexts/appContext';
import { useGuitarConfig } from 'src/hooks/useGuitarConfig';

const Scale: FC = () => {
  const { type, tuning, tonic, modeNotes } = useAppContext();
  const { config, stringPositions, fretPositions } = useGuitarConfig(type);
  const tuningNotes = [...tuning].reverse();

  const calculatePosition = (i: number) => {
    const caseNumber = i - 1;
    const typePos = type === 'lapsteel' ? 1 : 2;
    const isFirstCase = caseNumber < 0;
    const noteOffset = noteSize / 2;

    return isFirstCase
      ? fretPositions[0] - noteOffset * 4
      : fretPositions[caseNumber] +
          (fretPositions[caseNumber + 1] - fretPositions[caseNumber]) /
            typePos -
          noteOffset;
  };

  const isNoteInMode = (note: Note) => modeNotes.includes(note);

  const renderStringNotes = (string: Note, i: number) => {
    const fretCount = config.frets.count + 1;
    const idx = notes.findIndex((n) => n === string);
    const fromIdx = notes.slice(idx, notes.length);
    const beforeIdx = notes.slice(0, idx);
    const rebased = [...fromIdx, ...beforeIdx];
    const stringNotes = [...rebased, ...rebased].slice(0, fretCount);

    return stringNotes.map(
      (n, ni) =>
        (ni === 0 || isNoteInMode(n)) && (
          <Note
            key={`s${i}${string}-n${ni}${n}`}
            className="note"
            variant={tonic === n ? 'tonic' : 'default'}
            sx={{
              position: 'absolute',
              top: 0,
              left: calculatePosition(ni),
            }}
            emptyString={!ni}
            note={n}
          />
        )
    );
  };

  return (
    <Box sx={sx.scale}>
      <Box className="fretNumbers">
        {config.markers.numbers.map((m) => (
          <Box
            className="fretMarker"
            key={`marker-${m}`}
            sx={{
              left:
                fretPositions[m - 1] +
                (fretPositions[m] - fretPositions[m - 1]) /
                  (type === 'lapsteel' ? 1 : 2),
            }}
          >
            {m}
          </Box>
        ))}
      </Box>
      {tuningNotes.map((string: Note, si) => (
        <Box
          key={`s${si}${string}-line`}
          className="string"
          sx={{
            top: stringPositions[si] - noteSize / 2,
          }}
        >
          {renderStringNotes(string, si)}
        </Box>
      ))}
    </Box>
  );
};

export default Scale;
