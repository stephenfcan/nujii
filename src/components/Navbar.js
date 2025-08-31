import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="px-8 pb-4 pt-2 mt-2 flex items-center justify-between shadow-md">
      {/* Nav Links */}
      <ul className="flex space-x-8 font-sans text-[#5A3628] text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Popups">Pop-Ups</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}