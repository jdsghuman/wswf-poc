const client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export async function getAllEvents() {
  const events = await client
    .getEntries({
      content_type: "event",
      select:
        "fields.eventTitle, fields.description, fields.startDt, fields.endDt, fields.url, fields.location",
    })
    .then((response: any) => response.items);

  if (events) {
    return {
      events,
    };
  }
}

export async function getAllResources() {
  const resources = await client
    .getEntries({
      content_type: "resource",
      select: "fields.title, fields.type, fields.location",
    })
    .then((response: any) => response.items);

  if (resources) {
    return {
      resources,
    };
  }
}
