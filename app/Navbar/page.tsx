import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="list-none m-0 p-0 flex justify-around">
        <li><Link legacyBehavior href="/"><a className="text-white hover:text-gray-300">Home</a></Link></li>
        <li><Link legacyBehavior href="/about"><a className="text-white hover:text-gray-300">About Us</a></Link></li>
        <li><Link legacyBehavior href="/contact"><a className="text-white hover:text-gray-300">Contact Us</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
