export const createTranslateXInterpolation = (
  length: number,
  windowWidth: number
) => {
  const inputRange: number[] = [];
  const outputRange: number[] = [];
  for (let i = 0; i < length; i += 1) {
    inputRange.push(windowWidth * i);
    outputRange.push(i > 2 ? -(i - 2) * 12 : 0);
  }
  return {
    inputRange,
    outputRange,
    extrapolate: "clamp",
  };
};
