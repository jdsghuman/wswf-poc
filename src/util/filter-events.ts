import { EventItemType, SortOrderType } from "@/types";

export const checkIfDatesAreSameDay = (startDate: string, endDate: string) => {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const sortEvents = (
  currentEvents: EventItemType[],
  sortingOrder: SortOrderType
) => {
  return currentEvents?.sort((a: EventItemType, b: EventItemType) => {
    const startDateA = new Date(a.fields.startDt).valueOf();
    const startDateB = new Date(b.fields.startDt).valueOf();
    if (sortingOrder === "default") {
      return startDateA - startDateB;
    }
    return startDateB - startDateA;
  });
};
