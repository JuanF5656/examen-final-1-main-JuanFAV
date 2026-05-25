import { Link } from 'react-router-dom';
import { FaDragon, FaHeart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold text-orange-500">
        <FaDragon /> DragonDex
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-orange-400 transition-colors">Catálogo</Link>
        <Link to="/favorites" className="flex items-center gap-1 hover:text-red-400 transition-colors">
          <FaHeart className="text-red-500" /> Mis Favoritos
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;