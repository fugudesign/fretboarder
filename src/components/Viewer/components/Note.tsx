import Box, { BoxProps } from '@mui/material/Box';
import { brown, grey } from '@mui/material/colors';

import { FC } from 'react';
import clsx from 'clsx';

type Props = BoxProps &
  WithSx & {
    note: Note;
    variant?: 'default' | 'tonic';
    emptyString?: boolean;
  };

export const noteSize = 25;

const Note: FC<Props> = ({
  className,
  sx: sxProp,
  emptyString,
  variant,
  note,
}) => {
  const hasHash = /#/.test(note);
  const baseNote = note.replace(/#/g, '');

  const colorSx = {
    default: {
      color: grey[900],
      bgcolor: brown['A200'],
      '&.emptyString': {
        color: `primary.contrastText`,
        bgcolor: `transparent`,
        border: `2px solid`,
        borderColor: `primary.main`,
      },
    },
    tonic: {
      color: `secondary.contrastText`,
      bgcolor: `secondary.main`,
      '&.emptyString': {
        color: `secondary.contrastText`,
        bgcolor: `transparent`,
        border: `2px solid`,
        borderColor: `secondary.main`,
      },
    },
  };

  return (
    <Box
      sx={{
        boxShadow: 2,
        display: 'inline-flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: noteSize,
        height: noteSize,
        overflow: 'hidden',
        borderRadius: '50%',
        fontFamily: "'Instagram Sans Condensed', sans-serif",
        fontSize: '0.9em',
        fontWeight: 600,
        ...colorSx[variant ?? 'default'],
        '& sup': {
          fontSize: '0.6em',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(25%, -45%)',
        },
        ...sxProp,
      }}
      className={clsx(className, { emptyString })}
    >
      {baseNote}
      {hasHash && <sup>♯</sup>}
    </Box>
  );
};

export default Note;
