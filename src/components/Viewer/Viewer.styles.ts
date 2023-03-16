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
  },
};
