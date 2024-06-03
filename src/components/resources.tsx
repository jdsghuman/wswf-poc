import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { poppins, poppins400 } from "@/app/fonts";
import { FaYoutube, FaFileImage } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { FaPodcast } from "react-icons/fa";
import Link from "next/link";
import { ResourceType } from "@/types";

const ResourcesCard = async (resources: any) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <FaYoutube color="#FF0000" size={22} />;
      case "pdf":
        return <FaFilePdf size={22} />;
      case "image":
        return <FaFileImage size={22} />;
      default:
        return "no icon";
    }
  };

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
          {resources?.resources.resources.map((resource: ResourceType) => (
            <li className="odd:bg-gray-100 p-5">
              <Link
                className="flex items-center"
                href={resource?.fields?.location || ""}
                target="_blank"
              >
                {getIcon(...(resource.fields.type as unknown as [string]))}
                <p className="ml-2">{resource.fields.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ResourcesCard;
