// import { auth } from "@clerk/nextjs/server";
// import axios from "axios";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { userId } = auth();
//   const { eventId } = req.body;
//   try {
//     const response = await axios.post(
//       `https://www.eventbriteapi.com/v3/events/${eventId}/registrations/`,
//       {
//         attendee: {
//           userId: userId,
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${process.env.EVENTBRITE_OAUTH_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return NextResponse.json("Registered successfully");
//   } catch (error) {
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }
