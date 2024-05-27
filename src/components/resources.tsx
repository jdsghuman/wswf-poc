import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { poppins, poppins400 } from "@/app/fonts";
import { FaYoutube } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa";
import Link from "next/link";

const ResourcesCard = () => {
  return (
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
  );
};

export default ResourcesCard;
