export const convertMinutesToHour = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const minutes = Math.floor(runtime % 60);
  return `${hours}h ${minutes}m`;
};
