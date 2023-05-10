import { Theme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { noteSize } from './components/NoteMark';

export default {
  root: {
    display: 'flex',
    position: 'relative',
    ml: -3,
    mt: {
      xs: 0.5,
      md: 5,
    },
    mb: 2,
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
      bottom: -(noteSize * 2),
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
      color: grey[800],
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 900,
      '.dots': {
        color: 'primary.contrastText',
        display: 'flex',
        flexDirection: 'row',
      },
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
