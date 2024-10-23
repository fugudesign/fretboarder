export default {
  option: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start !important',
    justifyContent: 'flex-start',
  },
  tuning: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    opacity: 0.5,
  },
  note: {
    display: 'inline-flex',
    letterSpacing: '-0.1em',
    mx: 0.5,
    '&:first-of-type': {
      ml: 0,
    },
    '&:last-of-type': {
      mr: 0,
    },
  },
} as Sxs;
