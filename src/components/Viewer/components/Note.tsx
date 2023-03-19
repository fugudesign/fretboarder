import Box, { BoxProps } from '@mui/material/Box';

import { ColorPartial } from '@mui/material/styles/createPalette';
import { FC } from 'react';

type Props = BoxProps &
  WithSx & {
    note: Note;
    color?: ColorPartial;
  };

const Note: FC<Props> = ({ className, sx: sxProp, note, color }) => {
  const hasHash = /#/.test(note);
  const baseNote = note.replace(/#/g, '');

  return (
    <Box
      sx={{
        boxShadow: 2,
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        overflow: 'hidden',
        borderRadius: '50%',
        color: `${color}.dark`,
        bgcolor: `${color}.contrastText`,
        fontFamily: "'Instagram Sans Condensed', sans-serif",
        fontSize: '0.75em',
        fontWeight: 600,
        '& sup': {
          fontSize: '0.6em',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(25%, -45%)',
        },
        ...sxProp,
      }}
      className={className}
    >
      {baseNote}
      {hasHash && <sup>♯</sup>}
    </Box>
  );
};

export default Note;
