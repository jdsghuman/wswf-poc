"use client";
import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createEventDateString } from "@/util/create-date-string";
import { createEventTimeString } from "@/util/create-time-string";
import { checkIfDatesAreSameDay, sortEvents } from "@/util/filter-events";
import { EventItemType } from "@/types";
import { poppins, poppins400 } from "@/app/fonts";
import { Button } from "./ui/button";
import { RegisterModal } from "./modals/register-modal";

const EventsCard = (eventsToDisplay: any) => {
  console.log({ eventsToDisplay });
  const [open, setOpen] = useState(false);

  const { isSignedIn } = useAuth();

  const handleRegister = async (eventId: string) => {
    if (!isSignedIn) {
      setOpen(true);
    } else {
      setOpen(false);
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId }),
        });

        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error("Error registering for the event:", error);
        alert("Failed to register for the event.");
      }
    }
  };
  return (
    <>
      <RegisterModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {}}
      />
      <Card className="flex flex-col h-full">
        <CardHeader>
          <CardTitle
            className={`${poppins.className} border-b border-[#113A85] pb-2`}
          >
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="max-xs:px-0">
          <ul className={`${poppins400.className}`}>
            {eventsToDisplay?.eventsToDisplay?.map((event: EventItemType) => (
              <li
                className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 flex-col max-sm:py-3"
                key={event.sys.id}
              >
                {checkIfDatesAreSameDay(
                  event.fields.startDt,
                  event.fields.endDt || ""
                ) ? (
                  <div className="text-center text-sm">
                    <p>{createEventDateString(event.fields.startDt)}</p>
                    <p>
                      {createEventTimeString(event.fields.startDt)}
                      {" - "}
                      {createEventTimeString(event.fields.endDt)} UTC
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-sm">
                    <p>
                      {createEventDateString(event.fields.startDt)} -{" "}
                      {createEventDateString(event.fields.endDt)}
                    </p>
                    <p>
                      {createEventTimeString(event.fields.startDt)}-
                      {createEventTimeString(event.fields.endDt)} UTC
                    </p>
                  </div>
                )}

                <p className={`${poppins.className} my-3`}>
                  {event.fields.eventTitle}
                </p>
                <div className="max-sm:mt-1 mb-0">
                  <Button className="mx-1">More Info</Button>
                  <Button
                    onClick={() => handleRegister(event.fields.url)}
                    className="mx-1"
                  >
                    Register
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default EventsCard;
