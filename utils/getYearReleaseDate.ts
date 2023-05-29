export const getYearReleaseDate = (date: string) => {
  const year = new Date(date).getFullYear();
  return year;
};
