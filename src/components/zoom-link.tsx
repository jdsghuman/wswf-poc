"use client";

import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ZoomLinkProps {
  meetingId: string;
  passcode?: string;
  linkText?: string;
}

const ZoomLink: React.FC<ZoomLinkProps> = ({
  meetingId,
  passcode,
  linkText = "Join Zoom Meeting",
}) => {
  const zoomUrl = `https://zoom.us/j/${meetingId}${
    passcode ? `?pwd=${passcode}` : ""
  }`;

  const handleJoinMeeting = () => {
    window.location.href = "/api/zoom/auth";
  };

  return (
    <Button
      className="bg-[#2d8cff] hover:bg-[#113A85]"
      onClick={handleJoinMeeting}
    >
      {/* <Link
        href={zoomUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
      {/* </Link> */}
      {linkText}
    </Button>
  );
};

export default ZoomLink;
