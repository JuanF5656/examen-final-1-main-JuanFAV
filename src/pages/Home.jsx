import { useState, useEffect } from 'react';
import { fetchDragons } from '../services/dragonService';
import DragonCard from '../components/DragonCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Navbar from '../components/Navbar';
import { FaSearch } from 'react-icons/fa';

function Home() {
  const [dragons, setDragons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const loadData = () => {
    setLoading(true);
    setError(null);
    fetchDragons()
      .then((data) => {
        setDragons(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredDragons = dragons.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        
        {<i class="fa-solid fa-magnifying-glass"></i>}
        <div className="relative my-6 max-w-md mx-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Buscar dragón por nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-orange-500 bg-white text-slate-800"
          />
        </div>

        {loading && <Loader />}
        {error && <ErrorMessage message={error} retryFn={loadData} />}
        
        {!loading && !error && (
          filteredDragons.length === 0 ? (
            <p className="text-center text-slate-500 py-10">Ningún dragón coincide</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredDragons.map((dragon) => (
                <DragonCard key={dragon.id} dragon={dragon} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default Home;