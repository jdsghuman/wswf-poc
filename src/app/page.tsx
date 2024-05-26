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

export default function Home() {
  return (
    <Container>
      <div className="my-4 mx-4 flex justify-end">
        <ZoomLink meetingId="1234567890" passcode="password123" />
      </div>
      <div className="flex w-full mt-8 max-xl:flex-col">
        <div className="flex-1 ml-1 mr-1 max-xl:my-2">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle
                className={`${poppins.className} border-b border-[#113A85] pb-2`}
              >
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className={`${poppins400.className}`}>
                <li className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 max-sm:flex-col max-sm:py-3">
                  <p>June 1</p>
                  <p className={`${poppins.className}`}>Simran @ Young Space</p>
                  <div className="max-sm:mt-1 mb-0">
                    <Button className="mx-1">More Info</Button>
                    <Button className="mx-1">Register</Button>
                  </div>
                </li>
                <li className="flex justify-between items-center odd:bg-gray-100 p-2 py-4 max-sm:flex-col max-sm:py-3">
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
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 ml-1 mr-1  max-xl:my-2">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle
                className={`${poppins.className} border-b border-[#113A85] pb-2`}
              >
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className={`${poppins400.className}`}>
                <li className="flex items-center my-5 odd:bg-gray-100 p-4">
                  <FaYoutube color="#FF0000" size={22} />
                  <p className="ml-2">Simran technique</p>
                </li>
                <li className="flex items-center my-5 odd:bg-gray-100 p-4">
                  <FaPodcast size={22} />
                  <p className="ml-2">un[Learn] - Life on the ice podcast</p>
                </li>
                <li className="flex items-center my-5 odd:bg-gray-100 p-4">
                  <FaYoutube color="#FF0000" size={22} />
                  <p className="ml-2">Unstruck Melody - A Journey Inside</p>
                </li>
                <li className="flex items-center my-5 odd:bg-gray-100 p-4">
                  <FaFilePdf size={22} />
                  <p className="ml-2">Track your thoughts worksheet</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
