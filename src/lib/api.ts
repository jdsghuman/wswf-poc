// eslint-disable-next-line @typescript-eslint/no-var-requires
const client = require("contentful").createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

// Note: response is limited to 100 posts
// export async function getAllPosts() {
//   const blogs = await client
//     .getEntries({
//       content_type: 'blogPost',
//       order: '-fields.publishDate',
//     })
//     .then((response) => response.items)

//   const recipes = await client
//     .getEntries({
//       content_type: 'recipe',
//       order: '-fields.publishDate',
//     })
//     .then((response) => response.items)

//   if (blogs && recipes) {
//     return {
//       blogs,
//       recipes,
//     }
//   }
// }

export async function getAllBlogs() {
  const blogs = await client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      select:
        "fields.title, fields.description, fields.image, fields.slug, fields.description, fields.featured, fields.publishDate, fields.author, fields.category, fields.metaDescription",
    })
    .then((response) => response.items);

  if (blogs) {
    return {
      blogs,
    };
  }
}

export async function getAllEvents() {
  const events = await client
    .getEntries({
      content_type: "event",
      select:
        "fields.eventTitle, fields.description, fields.startDt, fields.endDt, fields.url, fields.location",
    })
    .then((response) => response.items);

  if (events) {
    return {
      events,
    };
  }
}

export async function getAllRecipes() {
  const recipes = await client
    .getEntries({
      content_type: "recipe",
      order: "-fields.publishDate",
      select:
        "fields.title, fields.description, fields.image, fields.slug, fields.description, fields.featured, fields.publishDate, fields.author, fields.category, fields.metaDescription",
      limit: 200,
    })
    .then((response) => response.items);

  if (recipes) {
    return {
      recipes,
    };
  }
}

export async function getPostBySlug(type, slug) {
  const data = await client.getEntries({
    content_type: type,
    "fields.slug": slug,
  });

  return data.items[0];
}

// get more 3 latest posts
export async function getMorePosts(type, slug) {
  const entries = await client.getEntries({
    content_type: type,
    limit: 3,
    order: "-fields.publishDate",
    "fields.slug[nin]": slug,
  });

  if (entries.items) {
    return entries.items;
  }
  console.log(`Error getting Entries.`);
}

//

export async function getAllPostsWithSlug(type) {
  const data = await client.getEntries({
    content_type: type,
  });

  return data;
}

export async function getAllCategories(type) {
  const data = await client
    .getEntries({
      content_type: type,
    })
    .then((response) => response.items);

  if (data) {
    return {
      data,
    };
  }
}
