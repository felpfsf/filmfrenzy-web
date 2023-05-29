export const convertMinutesToHours = (runtime: number): string => {
  const hours = Math.floor(runtime / 60);
  const minutes = Math.floor(runtime % 60);
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};
