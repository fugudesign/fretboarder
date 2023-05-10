import { Interval, chromaticHTI } from 'src/config/modes';
import { useMediaQuery, useTheme } from '@mui/material';

import Box from '@mui/material/Box';
import { Children } from 'react';
import IconButton from '@mui/material/IconButton';
import NoteMark from '../Viewer/components/NoteMark';
import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import { grey } from '@mui/material/colors';
import { notes } from 'src/config/notes';
import sx from './ScaleSchema.styles';
import { useAppContext } from 'src/contexts/appContext';
import wording from 'src/config/wording';

const ScaleSchema = () => {
  const { modeIntervals, tonic } = useAppContext();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const intervalsHTI = Object.keys(chromaticHTI) as Interval[];

  const noteInMode = (interval: Interval) => modeIntervals.includes(interval);

  const getHTI = (interval: Interval) => {
    const index = intervalsHTI.indexOf(interval);
    const hti = chromaticHTI[interval] - chromaticHTI[intervalsHTI[index - 1]];

    return hti > 1 ? hti * 2 : hti;
  };

  const getNote = (interval: Interval) => {
    if (!tonic) return;

    const index = intervalsHTI.indexOf(interval);
    const tonicIndex = notes.indexOf(tonic);
    const scaleEnd = notes.slice(0, tonicIndex);
    const scaleStart = notes.slice(tonicIndex, notes.length);
    const scale = [...scaleStart, ...scaleEnd];

    return scale[index];
  };

  return (
    <Box className={clsx('scaleSchema', { isSm })} sx={sx.root}>
      {Children.toArray(
        intervalsHTI.map((interval, index) => (
          <>
            {!!index && (
              <Box sx={{ ...sx.connector, flex: getHTI(interval) }} />
            )}
            <Box sx={{ ...sx.step }}>
              <Tooltip title={wording.intervals[interval]}>
                <IconButton sx={sx.button}>
                  <NoteMark
                    interval={interval}
                    sx={{
                      ...(modeIntervals && !noteInMode(interval)
                        ? { bgcolor: grey[800] }
                        : {}),
                    }}
                  />
                </IconButton>
              </Tooltip>
              <NoteMark
                sx={sx.note}
                className={clsx({ disabled: !noteInMode(interval) })}
                note={getNote(interval)}
                variant="text"
                onlyNote
              />
            </Box>
          </>
        ))
      )}
    </Box>
  );
};

export default ScaleSchema;
