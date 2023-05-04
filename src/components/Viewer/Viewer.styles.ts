import { Theme } from '@mui/material';
import { noteSize } from './components/NoteMark';

export default {
  root: {
    display: 'flex',
    position: 'relative',
    '& svg': {
      display: 'block',
    },
  },
  scale: {
    zIndex: 5,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'visible',
    '& .string': {
      position: 'absolute',
      left: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      height: noteSize,
    },
    '& .note': {},
    '& .fretNumbers': {
      position: 'absolute',
      top: -(noteSize * 1.5),
      left: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      height: noteSize,
    },
    '& .fretMarker': {
      position: 'absolute',
      transform: 'translateX(-50%)',
      borderRadius: '50%',
      width: noteSize,
      height: noteSize,
      backgroundColor: '#402f1f',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "'Instagram Sans Condensed', sans-serif",
      fontWeight: 800,
    },
  },
  neck: {
    '& .fingerboard': {
      fill: '#402f1f',
    },
    '& .head': {
      fill: 'transparent',
    },
    '& .marker': {
      fill: '#FFF',
    },
    '& .fret': {
      stroke: '#AAA',
    },
    '& .nut': {
      stroke: '#DCDCDC',
    },
    '& .string': {
      stroke: '#DDD',
    },
    '& .tuningNote': {
      position: 'relative',

      '& rect': {
        fill: (theme: Theme) => theme.palette.primary.main,
      },
      '& text': {
        position: 'relative',
        fill: (theme: Theme) => theme.palette.primary.contrastText,
        fontSize: '0.95em',
        fontWeight: 900,
      },
    },
  },
} as Sxs;
