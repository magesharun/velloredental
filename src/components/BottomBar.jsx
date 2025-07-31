import { FaHome, FaUserMd, FaInfoCircle, FaCompass, FaPhone, FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // ✅ Make sure this is imported

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-xl border-t border-gray-200 z-50">
      <ul className="flex justify-between items-center px-4 py-2 max-w-2xl mx-auto text-blue-800 font-medium text-sm">
        <NavItem icon={<FaHome />} label="Home" href="/" />
        <NavItem icon={<FaTooth />} label="Treatments" href="/treatments" />
        <NavItem icon={<FaUserMd />} label="Doctors" href="/doctors" />
        <NavItem icon={<FaInfoCircle />} label="About" href="/about-us" />
        <NavItem icon={<FaCompass />} label="Explore" href="/explore" />
        <NavItem icon={<FaPhone />} label="Contact" href="/contact" />
      </ul>
    </nav>
  );
}

// Replace <a> with <Link to="...">
const NavItem = ({ icon, label, href }) => (
  <li>
    <Link
      to={href}
      className="flex flex-col items-center justify-center gap-1 group cursor-pointer transition duration-300 hover:text-blue-600"
    >
      <span className="text-xl group-hover:scale-110 transition">{icon}</span>
      <span className="text-xs group-hover:font-semibold transition">{label}</span>
    </Link>
  </li>
);
