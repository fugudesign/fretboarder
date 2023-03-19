import { Theme } from '@mui/material';

export default {
  root: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 0,
    py: (theme: Theme) => theme.spacing(2),
  },
  button: {
    '&.active': {},
  },
} as Sxs;
