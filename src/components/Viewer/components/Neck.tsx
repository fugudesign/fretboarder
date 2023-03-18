import Box from '@mui/material/Box';
import { FC } from 'react';
import clsx from 'clsx';
import sx from '../Viewer.styles';
import { useAppContext } from 'src/contexts/appContext';
import { useGuitarConfig } from 'src/hooks/useGuitarConfig';

type Props = {
  type?: NeckType;
};

const Neck: FC<Props> = ({ type = 'classic' }) => {
  const { config, stringPositions, fretPositions } = useGuitarConfig(type);
  const { tuning } = useAppContext();
  const notes = [...tuning].reverse();

  const fingerboard = (
    <rect
      className="fingerboard"
      x={fretPositions[0]}
      y="0"
      width={fretPositions[fretPositions.length - 1]}
      height={config.board.height}
    />
  );

  const markers = config.markers.numbers.map((fret: number) => {
    if (fret === 12) {
      return (
        <g key={`marker-${fret}`} id={`marker-${fret}`}>
          <circle
            className="marker"
            cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
            cy={
              (config.strings.sizes.length * 0.25 * config.board.height) /
              config.strings.sizes.length
            }
            r={config.markers.size}
          />
          <circle
            className="marker"
            cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
            cy={
              (config.strings.sizes.length * 0.75 * config.board.height) /
              config.strings.sizes.length
            }
            r={config.markers.size}
          />
        </g>
      );
    }
    return (
      <circle
        className="marker"
        key={`marker-${fret}`}
        id={`marker-${fret}`}
        cx={(fretPositions[fret] + fretPositions[fret - 1]) / 2}
        cy={config.board.height / 2}
        r={config.markers.size}
      />
    );
  });

  const frets = fretPositions.map((pos, i) => {
    return (
      <line
        className={clsx('fret', { nut: !i })}
        key={`fret-${i}`}
        id={`fret-${i}`}
        x1={pos}
        y1="0"
        x2={pos}
        y2={config.board.height}
        strokeWidth={config[!i ? 'nut' : 'frets'].width}
      />
    );
  });

  const strings = stringPositions.map((pos, i) => {
    return (
      <line
        className="string"
        key={`string-${i}`}
        id={`string-${i}`}
        x1={fretPositions[0] - 15}
        y1={pos}
        x2={config.board.width}
        y2={pos}
        strokeWidth={config.strings.sizes[i]}
      />
    );
  });

  const tuningNotes = stringPositions.map((pos, i) => {
    return (
      <g key={`tuningNote-${i}`} id={`tuningNote-${i}`} className="tuningNote">
        <rect
          x={fretPositions[0] - 62}
          y={pos - 10}
          rx={10}
          ry={10}
          width={30}
          height={20}
        />
        <text x={fretPositions[0] - 55} y={pos + 5}>
          {notes[i]}
        </text>
      </g>
    );
  });

  return (
    <Box className="neck" sx={sx.neck}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${config.board.width} ${config.board.height}`}
        width={`${config.board.width}`}
        height={`${config.board.height}`}
      >
        {fingerboard}
        {markers}
        {frets}
        {strings}
        {tuningNotes}
      </svg>
    </Box>
  );
};

export default Neck;
