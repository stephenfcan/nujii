import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="md:px-8 px-4 pb-4 pt-2 mt-2 flex items-center justify-between shadow-md">
      {/* Nav Links */}
      <ul className="flex space-x-4 md:space-x-8 font-sans text-[#29c453] text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/popups">Pop-Ups</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}