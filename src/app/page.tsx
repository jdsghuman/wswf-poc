import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { poppins, poppins400 } from "@/app/fonts";

import ZoomLink from "@/components/zoom-link";
import { FaYoutube } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa";
import Link from "next/link";
import { getAllEvents } from "@/lib/api";
import { createEventDateString } from "@/util/create-date-string";
import { createEventTimeString } from "@/util/create-time-string";
import { checkIfDatesAreSameDay } from "@/util/filter-events";
import { EventItemType } from "@/types";

export default async function Home() {
  const upcomingEvents = await getAllEvents();
  console.log(upcomingEvents?.events);

  return (
    <Container>
      <div className="my-4 mx-4 flex justify-end h-full">
        <ZoomLink meetingId="1234567890" passcode="password123" />
      </div>
      <div className="flex w-full mt-8 max-xl:flex-col">
        <div className="flex-1 ml-1 mr-1 max-xl:my-4">
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
                {upcomingEvents?.events.map((event: EventItemType) => (
                  <li className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 flex-col max-sm:py-3">
                    {checkIfDatesAreSameDay(
                      event.fields.startDt,
                      event.fields.endDt || ""
                    ) ? (
                      <div>
                        <p>{createEventDateString(event.fields.startDt)}</p>
                        <p>
                          {createEventTimeString(event.fields.startDt)}
                          {" - "}
                          {createEventTimeString(event.fields.endDt)}
                        </p>
                      </div>
                    ) : (
                      <p>
                        <span>
                          {createEventDateString(event.fields.startDt)}
                        </span>
                        ' '
                        <span>
                          {createEventTimeString(event.fields.startDt)}
                        </span>{" "}
                        -
                        <span>{createEventTimeString(event.fields.endDt)}</span>
                      </p>
                    )}

                    <p className={`${poppins.className} my-2`}>
                      {event.fields.eventTitle}
                    </p>
                    <div className="max-sm:mt-1 mb-0">
                      <Button className="mx-1">More Info</Button>
                      <Button className="mx-1">Register</Button>
                    </div>
                  </li>
                ))}

                {/* <li className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 max-sm:flex-col max-sm:py-3">
                  <p>June 1</p>
                  <p className={`${poppins.className}`}>Simran @ Young Space</p>
                  <div className="max-sm:mt-1 mb-0">
                    <Button className="mx-1">More Info</Button>
                    <Button className="mx-1">Register</Button>
                  </div>
                </li> */}
                {/* <li className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 max-sm:flex-col max-sm:py-3">
                  <p>June 15</p>
                  <p className={`${poppins.className}`}>
                    Power of Connection Workshop
                  </p>
                  <div className="max-sm:mt-1 mb-0">
                    <Button className="mx-1">More Info</Button>
                    <Button className="mx-1">Register</Button>
                  </div>
                </li>
                <li className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 max-sm:flex-col max-sm:py-3">
                  <p>June 30</p>
                  <p className={`${poppins.className}`}>Mind Strong</p>
                  <div className="max-sm:mt-1 mb-0">
                    <Button className="mx-1">More Info</Button>
                    <Button className="mx-1">Register</Button>
                  </div>
                </li> */}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 ml-1 mr-1  max-xl:my-4">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle
                className={`${poppins.className} border-b border-[#113A85] pb-2`}
              >
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="max-xs:px-0">
              <ul className={`${poppins400.className}`}>
                <li className="odd:bg-gray-100 p-5">
                  <Link className="flex items-center" href="">
                    <FaYoutube color="#FF0000" size={22} />
                    <p className="ml-2">Simran technique</p>
                  </Link>
                </li>
                <li className="odd:bg-gray-100 p-5">
                  <Link className="flex items-center" href="">
                    <FaPodcast size={22} />
                    <p className="ml-2">un[Learn] - Life on the ice podcast</p>
                  </Link>
                </li>
                <li className="odd:bg-gray-100 p-5">
                  <Link className="flex items-center" href="">
                    {" "}
                    <FaYoutube color="#FF0000" size={22} />
                    <p className="ml-2">Unstruck Melody - A Journey Inside</p>
                  </Link>
                </li>
                <li className="odd:bg-gray-100 p-5">
                  <Link className="flex items-center" href="">
                    {" "}
                    <FaFilePdf size={22} />
                    <p className="ml-2">Track your thoughts worksheet</p>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
