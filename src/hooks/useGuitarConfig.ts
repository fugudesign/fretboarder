import necks from 'src/config/necks';

export const useGuitarConfig = (type: NeckType) => {
  const config = necks[type];

  const calculateStringPositions = () => {
    const count = config.strings.sizes.length;
    const margin = config.strings.margin;
    const utilHeight = config.board.height - margin * 2;
    const stringArray = Array(count).fill(0);
    const spacing = utilHeight / (count - 1);
    return stringArray.map((s, i) => margin + i * spacing);
  };

  const calculateFretPositions = () => {
    const dMax = 0.95;
    const scaleLen = dMax / (1 - Math.pow(2, -(config.frets.count + 1) / 12));
    const perc = Array(config.frets.count + 1)
      .fill(0)
      .map((d, n) => scaleLen * (1 - Math.pow(2, -(n + 1) / 12)));

    return perc.map((f) => f * config.board.width);
  };

  return {
    config,
    stringPositions: calculateStringPositions(),
    fretPositions: calculateFretPositions(),
  };
};
