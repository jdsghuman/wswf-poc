export interface EventItemType {
  fields: {
    eventTitle: string;
    description: string;
    startDt: string;
    endDt: string;
    url: string;
    location: string;
  };
  sys: {
    id: string;
    type: string;
  };
}
