import Box from '@mui/material/Box';
import { FC } from 'react';
import Note from './Note';
import { notes } from 'src/config/tunings';
import sx from '../Viewer.styles';
import { useAppContext } from 'src/contexts/appContext';
import { useGuitarConfig } from 'src/hooks/useGuitarConfig';

const Scale: FC = () => {
  const { type, tuning } = useAppContext();
  const { config, stringPositions, fretPositions } = useGuitarConfig(type);

  const calculatePosition = (i: number) => {
    return type === 'lapsteel'
      ? fretPositions[i] + (fretPositions[i + 1] - fretPositions[i]) - 10
      : fretPositions[i] + (fretPositions[i + 1] - fretPositions[i]) / 2 - 10;
  };

  const renderStringNotes = (string: Note, i: number) => {
    const fretCount = config.frets.count;
    const idx = notes.findIndex((n) => n === string);
    const fromIdx = notes.slice(idx + 1, notes.length);
    const beforeIdx = notes.slice(0, idx + 1);
    const rebased = [...fromIdx, ...beforeIdx];
    const stringNotes = [...rebased, ...rebased].slice(0, fretCount);

    return stringNotes.map((n, ni) => (
      <Note
        key={`s${i}${string}-n${ni}${n}`}
        className="note"
        color="primary"
        sx={{
          position: 'absolute',
          top: 0,
          left: calculatePosition(ni),
        }}
        note={n}
      />
    ));
  };

  return (
    <Box sx={sx.scale}>
      {tuning.map((string: Note, si) => (
        <Box
          key={`s${si}${string}-line`}
          className="string"
          sx={{
            position: 'absolute',
            top: stringPositions[si] - 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            height: 20,
          }}
        >
          {renderStringNotes(string, si)}
        </Box>
      ))}
    </Box>
  );
};

export default Scale;
