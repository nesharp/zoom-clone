"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
export const LinkItem = ({
  link,
  isSheet = false,
}: {
  link: { route: string; imgUrl: string; label: string };
  isSheet?: boolean;
}) => {
  const pathName = usePathname();
  const isActive =
    pathName === link.route ||
    (pathName.startsWith(link.route) && link.route !== "/");

  return (
    <Link
      href={link.route}
      key={link.route}
      className={cn(
        "flex gap-4 items-center  p-4 rounded-lg justify-start relative"
        // {
        //   "bg-blue-1": isActive,
        // }
      )}
    >
      <Image
        src={link.imgUrl}
        alt={link.label}
        width={isSheet ? 20 : 24}
        height={isSheet ? 20 : 24}
      />
      <p className={cn("font-semibold", !isSheet && "text-lg  max-lg:hidden")}>
        {link.label}
      </p>
      {isActive && (
        <motion.div
          className="bg-blue-1 rounded-lg absolute top-0 left-0 right-0 bottom-0 -z-50"
          layoutId={`active-${isSheet ? "sheet" : "sidebar"}`}
        ></motion.div>
      )}
    </Link>
  );
};
