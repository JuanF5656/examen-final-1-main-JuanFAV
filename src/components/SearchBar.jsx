import { FaSearch } from 'react-icons/fa';

function SearchBar({ value, onChange }) {
  return (
    <div className="relative my-6 max-w-md mx-auto">
      {<i class="fa-solid fa-magnifying-glass"></i>}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
        <FaSearch />
      </span>
      <input
        type="text"
        placeholder="Buscar dragón por nombre..."
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2.5 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-orange-500 bg-white text-slate-800"
      />
    </div>
  );
}

export default SearchBar;