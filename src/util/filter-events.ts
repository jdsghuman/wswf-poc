export const checkIfDatesAreSameDay = (startDate: string, endDate: string) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
