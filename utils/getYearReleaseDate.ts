export const getYearReleaseDate = (date: string): number => {
  const year = new Date(date).getFullYear();
  return year;
};
