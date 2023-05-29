export const formatDate = (date: string):string => {
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    newDate
  );

  return formattedDate;
};
