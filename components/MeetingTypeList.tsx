"use client";
import { useState } from "react";
import { MeetingListItem } from "./MeetingListItem";
import { useRouter } from "next/navigation";
type MeetingType =
  | "isScheduleMeeting"
  | "isJoiningMeeting"
  | "isInstantMeeting"
  | undefined;
export const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<MeetingType>();
  const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <MeetingListItem
        title="New Meeting"
        description="Start an instant meeting"
        imgUrl="/icons/add-meeting.svg"
        className="bg-orange-1"
        onClick={() => setMeetingState("isJoiningMeeting")}
      />
      <MeetingListItem
        title="Schedule Meeting"
        description="Plan your meeting"
        imgUrl="/icons/schedule.svg"
        className="bg-blue-1"
        onClick={() => setMeetingState("isScheduleMeeting")}
      />
      <MeetingListItem
        title="View Recordings"
        description="Checkout your recordings"
        imgUrl="/icons/recordings.svg"
        className="bg-purple-1"
        onClick={() => router.push("/recordings")}
      />
      <MeetingListItem
        title="Join Meeting"
        description="via invite link or code"
        imgUrl="/icons/join-meeting.svg"
        className="bg-yellow-1"
      />
    </section>
  );
};
