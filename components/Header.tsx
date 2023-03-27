"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { HeaderList } from "@/utils/HeaderList";

function Header() {
  return (
    <header className="fixed z-50 p-1 w-screen px-4 md:p-6 md:px-16 bg-[#fcfcf8]">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            className="w-8 object-cover"
            alt="Logo"
            width={200}
            height={200}
          />

          <p className="text-xl text-headingColor font-semibold  ">City </p>
        </Link>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-8 ml-auto"
        >
          {HeaderList.map((item: string) => (
            <li
              key={item}
              className="text-base text-textColor cursor-pointer transition-all ease-out hover:text-headingColor"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </header>
  );
}

export default Header;
