export const getYearReleaseDate = (date: string | undefined): number | string => {
  if(!date) return "TBA"
  const year = new Date(date).getFullYear();
  return year;
};
