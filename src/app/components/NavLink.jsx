'use client';
import Link from 'next/link';

const NavLink = ({ href, title, onClick }) => (
  <Link href={href} scroll={true}>
    <span
      onClick={onClick}
      className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
    >
      {title}
    </span>
  </Link>
);

export default NavLink;
