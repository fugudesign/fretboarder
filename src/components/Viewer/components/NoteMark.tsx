import Box, { BoxProps } from '@mui/material/Box';
import { Interval, colorsOfHTI } from 'src/config/modes';

import { grey } from '@mui/material/colors';
import clsx from 'clsx';
import { FC } from 'react';
import { BaseNote } from 'src/config/notes';
import { useAppContext } from 'src/contexts/appContext';

export type NoteMarkProps = BoxProps &
  WithSx & {
    note?: BaseNote;
    interval?: Interval;
    variant?: 'default' | 'text';
    emptyString?: boolean;
    onlyNote?: boolean;
  };

export const noteSize = 25;

const NoteMark: FC<NoteMarkProps> = ({
  className,
  sx: sxProp,
  emptyString,
  variant,
  note,
  interval,
  onlyNote = false,
  ...props
}) => {
  const { displayMode } = useAppContext();
  const hasHash = note ? /#/.test(note) : undefined;
  const baseNote = note ? note.replace(/#/g, '') : undefined;

  const renderValue = () => {
    if ((displayMode === 'interval' && !onlyNote) || !note) {
      return interval;
    }

    return (
      <>
        {baseNote}
        {hasHash && <sup>♯</sup>}
      </>
    );
  };

  const color = () => {
    if (displayMode === 'interval') {
      return interval ? colorsOfHTI[interval][0] : 'transparent';
    }
    return interval ? colorsOfHTI[interval][0] : grey[800];
  };

  const accentColor = () => {
    if (displayMode === 'interval') {
      return interval ? colorsOfHTI[interval][1] : 'transparent';
    }
    return interval ? colorsOfHTI[interval][1] : 'background.default';
  };

  const isTonic = interval === 'T';

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
        borderRadius: isTonic ? '25%' : '50%',
        fontFamily: "'Instagram Sans Condensed', sans-serif",
        fontSize: noteSize,
        fontWeight: 600,
        cursor: 'pointer',
        '& > span': {
          fontSize: '0.7em !important',
        },
        '& sup': {
          fontSize: '0.6em',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(25%, -45%)',
        },
        color: accentColor,
        bgcolor: color,
        '&.isTonic': {
          color: `secondary.contrastText`,
          border: `2px solid`,
          borderColor: `secondary.contrastText`,
        },
        '&.emptyString': {
          color: color,
          bgcolor: `transparent`,
          border: `1px solid`,
          borderColor: color,
          '&.isTonic': {
            border: `2px solid`,
            color: `secondary.contrastText`,
            borderColor: `secondary.contrastText`,
          },
        },
        '&.isText': {
          bgcolor: 'transparent',
        },
        ...sxProp,
      }}
      className={clsx(className, 'noteMark', {
        emptyString,
        isTonic,
        isText: variant === 'text',
      })}
      {...props}
    >
      <span>{renderValue()}</span>
    </Box>
  );
};

export default NoteMark;
