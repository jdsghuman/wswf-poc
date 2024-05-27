import Container from "@/components/container";
import ZoomLink from "@/components/zoom-link";

import { getAllEvents } from "@/lib/api";
import { sortEvents } from "@/util/filter-events";
import EventsCard from "@/components/events";
import ResourcesCard from "@/components/resources";

export default function Home() {
  return (
    <Container>
      <div className="my-4 mx-4 flex justify-end h-full">
        <ZoomLink meetingId="1234567890" passcode="password123" />
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
