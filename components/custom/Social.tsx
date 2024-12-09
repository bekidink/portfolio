import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn,  FaTwitter } from "react-icons/fa";
const links = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
];
export default function Social({
  containerStyles,
  iconStyles,
}: {
  containerStyles:string,
  iconStyles:string
}) {
  return (
    <div className={containerStyles}>
      {links.map((item, i) => {
        return (
          <Link key={i} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}
