import { auth, currentUser } from "@clerk/nextjs/server";

import Container from "@/components/container";
import ZoomLink from "@/components/zoom-link";
import EventsCard from "@/components/events";
import ResourcesCard from "@/components/resources";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";
import { getAllEvents, getAllResources } from "@/lib/api";
import { sortEvents } from "@/util/filter-events";

const Home = async () => {
  const upcomingEvents = await getAllEvents();
  const eventsToDisplay = sortEvents(upcomingEvents?.events, "default");
  const resources = await getAllResources();

  const { userId } = auth();

  return (
    <Container>
      <div className="my-4 mx-4 flex justify-end h-full">
        {userId ? (
          <ZoomLink meetingId="1234567890" passcode="password123" />
        ) : (
          <Alert>
            <Bell className="h-4 w-4" />
            <AlertTitle>Join Us Online!</AlertTitle>
            <AlertDescription>
              Sign in through the navbar to access exclusive content.
            </AlertDescription>
          </Alert>
        )}
      </div>
      <div className="flex w-full mt-8 max-xl:flex-col">
        <div className="flex-1 ml-1 mr-1 max-xl:my-4">
          <EventsCard eventsToDisplay={eventsToDisplay} />
        </div>
        {userId && (
          <div className="flex-1 ml-1 mr-1  max-xl:my-4">
            <ResourcesCard resources={resources} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
