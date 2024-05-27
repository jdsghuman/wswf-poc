import { auth, currentUser } from "@clerk/nextjs/server";

import Container from "@/components/container";
import ZoomLink from "@/components/zoom-link";
import EventsCard from "@/components/events";
import ResourcesCard from "@/components/resources";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    console.log("signed in");
  } else {
    console.log("not signed in");
  }
  return (
    <Container>
      <div className="my-4 mx-4 flex justify-end h-full">
        {userId ? (
          <ZoomLink meetingId="1234567890" passcode="password123" />
        ) : (
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertTitle>Sign in and join online!</AlertTitle>
            <AlertDescription>
              Click the sign in button in the navbar and view more content.
            </AlertDescription>
          </Alert>
        )}
      </div>
      <div className="flex w-full mt-8 max-xl:flex-col">
        <div className="flex-1 ml-1 mr-1 max-xl:my-4">
          <EventsCard />
        </div>
        <div className="flex-1 ml-1 mr-1  max-xl:my-4">
          <ResourcesCard />
        </div>
      </div>
    </Container>
  );
}
