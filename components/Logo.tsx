"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 100,
        },
      }}
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zoom
        </p>
      </Link>
    </motion.div>
  );
};
