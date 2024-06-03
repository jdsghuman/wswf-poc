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

export interface ResourceType {
  fields: {
    title: string;
    type: "pdf" | "video" | "image";
    location?: string;
  };
  sys: {
    id: string;
  };
}

export type SortOrderType = "default" | "newest" | "oldest";
