import { Note } from 'src/config/notes';

import { Circle as CircleIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { FC } from 'react';
import { useAppContext } from 'src/contexts/appContext';
import { useGuitarConfig } from 'src/hooks/useGuitarConfig';
import sx from '../Viewer.styles';
import ScaleString from './ScaleString';

const Scale: FC = () => {
  const { type, tuning } = useAppContext();
  const { config, fretPositions } = useGuitarConfig(type);
  const tuningNotes = tuning.notes;

  return (
    <Box sx={sx.scale}>
      <Box className="fretNumbers">
        {config.markers.numbers.map((m) => (
          <Box
            className="fretMarker"
            key={`marker-${m}`}
            data-dot={m === 12 ? 2 : 1}
            sx={{
              left:
                fretPositions[m - 1] +
                (fretPositions[m] - fretPositions[m - 1]) / (type === 'lapsteel' ? 1 : 2),
            }}
          >
            <Box className="dots">
              <CircleIcon sx={{ width: 10 }} /> {m === 12 && <CircleIcon sx={{ width: 10 }} />}
            </Box>
            {m}
          </Box>
        ))}
      </Box>
      {tuningNotes.map((string: Note, stringIndex) => {
        return (
          <ScaleString
            key={`s${stringIndex}${string}`}
            stringNote={string}
            stringIndex={stringIndex}
          />
        );
      })}
    </Box>
  );
};

export default Scale;
