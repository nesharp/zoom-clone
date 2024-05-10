"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface MeetingListItemProps {
  className?: string;
  onClick?: () => void;
  imgUrl: string;
  title: string;
  description: string;
}
export const MeetingListItem = ({
  description,
  imgUrl,
  title,
  className,
  onClick,
}: MeetingListItemProps) => {
  return (
    <div
      className={cn(
        " px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px] ">
        <Image src={imgUrl} height={27} width={27} alt="meeting" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};
