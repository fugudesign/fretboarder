import { Interval, chromaticHTI } from 'src/config/modes';

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
  const intervalsHTI = Object.keys(chromaticHTI) as Interval[];

  const noteInMode = (interval: Interval) => modeIntervals.includes(interval);

  const getHTI = (interval: Interval) => {
    const index = intervalsHTI.indexOf(interval);
    return chromaticHTI[interval] - chromaticHTI[intervalsHTI[index - 1]];
  };

  const getNote = (interval: Interval) => {
    console.log('getNote', interval);
    if (!tonic) return;

    const index = intervalsHTI.indexOf(interval);
    const tonicIndex = notes.indexOf(tonic);
    const scaleEnd = notes.slice(0, tonicIndex);
    const scaleStart = notes.slice(tonicIndex, notes.length);
    const scale = [...scaleStart, ...scaleEnd];

    console.log({
      index,
      scale,
      tonicIndex,
      note: scale[index],
    });
    return scale[index];
  };

  return (
    <Box sx={sx.root}>
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
                    emptyString
                    sx={{
                      ...(modeIntervals && !noteInMode(interval)
                        ? {
                            '&.emptyString': {
                              color: grey[800],
                              bgcolor: 'transparent',
                              border: `2px solid`,
                              borderColor: grey[800],
                            },
                          }
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
