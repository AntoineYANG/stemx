// get wave data from the input audio file
const getWaveMap = (audioBuffer: AudioBuffer, width: number, height: number): [min: number, max: number][] => {
  const data = audioBuffer.getChannelData(0);
  const step = Math.ceil(data.length / width);
  const amp = height / 2;
  const waveMap: [min: number, max: number][] = [];
  for (let i = 0; i < width; i++) {
    let min = 1.0;
    let max = -1.0;
    for (let j = 0; j < step; j++) {
      const datum = data[i * step + j];
      if (datum < min) min = datum;
      if (datum > max) max = datum;
    }
    waveMap.push([
      amp * min + amp,
      amp * max + amp,
    ]);
  }
  return waveMap;
};


export { getWaveMap };
