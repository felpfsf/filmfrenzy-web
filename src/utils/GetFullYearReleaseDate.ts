export const getFullYearReleaseDate = (date: string) => {
  const year = new Date(date).getFullYear();
  return year;
};
