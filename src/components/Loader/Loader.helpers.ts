export const getDotMargin = (index: number, fullScreen?: boolean) => {
  if (index && fullScreen) {
    return 15;
  }
  if (index && !fullScreen) {
    return 5;
  }

  return 0;
};
