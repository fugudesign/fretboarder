import { SxProps, Theme } from '@mui/material';

export default {
  root: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',

    '& svg': {
      display: 'block',
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
      fill: '#af967c',
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

      '& circle': {
        fill: (theme: Theme) => theme.palette.primary.main,
      },
      '& text': {
        position: 'relative',
        fill: (theme: Theme) => theme.palette.primary.contrastText,
        stroke: (theme: Theme) => theme.palette.primary.contrastText,
        strokeWidth: 0.5,
        fontSize: '0.95em',
      },
    },
  },
} as Sxs;
