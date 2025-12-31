import Link from 'next/link';
import { AiOutlineMenu, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export default function Navbar() {
  return (
    <nav className="md:px-8 px-4 pb-4 mt-2 flex items-center justify-between shadow-md">
      {/* Nav Links */}
      <ul className='flex space-x-4 md:space-x-8 font-sans text-[#1a7533] text-sm'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/popups">Pop-Ups</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
      </ul>
      <ul className='font-sans text-[#1a7533] text-sm'>
        <Link href='https://www.instagram.com/nujiitea/'>
          <AiFillInstagram size={30} />
        </Link>
      </ul>
    </nav>
  );
}