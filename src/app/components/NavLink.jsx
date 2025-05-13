'use client';
import Link from 'next/link';

const NavLink = ({ href, title, onClick }) => (
  <Link href={href}>
    <span
      onClick={(e) => {
        e.preventDefault(); // prevent default link jump
        onClick?.();        // manual scroll handled by parent
      }}
      className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
    >
      {title}
    </span>
  </Link>
);

export default NavLink;
