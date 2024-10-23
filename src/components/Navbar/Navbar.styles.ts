export default {
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  toolbar: {
    height: {
      xs: 60,
      md: 100,
    },
  },
  background: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    backgroundPosition: 'center right',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'color-dodge',
  },
  left: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  brand: {
    ml: {
      xs: 0,
      md: 5,
    },
    fontSize: {
      xs: 25,
      md: 35,
    },
    fontWeight: 900,
    letterSpacing: '-0.04em',
  },
} as Sxs;
