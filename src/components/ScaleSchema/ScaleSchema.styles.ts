export default {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    fontSize: 'inherit',
  },
  step: {},
  connector: {
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      height: '1px',
      borderBottom: '1px solid white',
    },
  },
} as Sxs;
