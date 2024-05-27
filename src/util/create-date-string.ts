const nthNumber = (number: number) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

enum DayOfTheWeek {
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
}

export const createEventDateString = (date: Date | string) => {
  if (date) {
    const eventDate = new Date(date);
    const weekday = eventDate.getDay();
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString("default", { month: "short" });
    const year = eventDate.getFullYear();
    return `${DayOfTheWeek[weekday]} ${month} ${day}${nthNumber(day)} ${year}`;
  }
  return "";
};
