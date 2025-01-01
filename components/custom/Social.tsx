import Link from 'next/link';
import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const links = [
  { icon: <FaGithub />, path: "https://github.com/bekidink" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/bereket-denku-a62256334",
  },
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
