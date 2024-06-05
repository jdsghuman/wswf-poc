import { auth, currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { userId } = auth();
  const user = await currentUser();

  const body = await req.json();
  const { eventId } = body;
  console.log("eventId in server----", eventId);
  console.log("user----", user);
  if (!eventId) {
    return new Response("Event ID is invalid", {
      status: 400,
    });
  }

  try {
    const response = await axios.post(
      `https://www.eventbriteapi.com/v3`,
      {
        name: user?.fullName || user?.firstName,
        email: user?.emailAddresses[0].emailAddress,
        first_name: user?.firstName,
        last_name: user?.lastName,
        event_id: eventId,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EVENT_BRITE_API}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json("Registered successfully");
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
    console.log(error.config);
    return new NextResponse(`Internal error ${error}`, { status: 500 });
  }
}
