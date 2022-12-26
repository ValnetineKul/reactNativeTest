export const getRandom = (n: number) => {
  return Math.round(Math.random() * n);
};

export const getRandomColors = (colors?: string[]) => {
  if (colors && colors.length > 0) {
    const l = colors.length - 1;
    const n = Math.round(Math.random() * l);
    return colors[n];
  } else {
    return `rgb("${getRandom(255)}, ${getRandom(255)}, ${getRandom(255)}")`;
  }
};

export const speedHelper: Record<number, number> = {
  3: 900,
  2: 700,
  1: 500,
};
