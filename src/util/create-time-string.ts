export const createEventTimeString = (startTime: string) => {
  if (startTime.includes("12:00:00Z")) {
    return "";
  }

  const d = new Date(startTime);
  // Return a string in a readable format, replace spaces and leading zeros
  return d
    .toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "utc",
    })
    .toLowerCase()
    .trim()
    .replace(/\s/g, "")
    .replace(/^0+/, "");
};
