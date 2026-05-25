import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';
import { FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';

function DragonDetail() {
  const { name } = useParams(); 
  const [dragon, setDragon] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setDragon(data);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <> Britons <Navbar /><Loader /></>;

  const isFavorite = favorites.some((fav) => fav.id === dragon.id);
  const image = dragon.sprites.other['official-artwork'].front_default || dragon.sprites.front_default;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 mt-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-4 font-medium">
          <FaArrowLeft /> Volver al catálogo
        </Link>

        <div className="bg-white border rounded-2xl p-6 shadow-sm relative">
          <button 
            onClick={() => isFavorite ? removeFromFavorites(dragon.id) : addToFavorites(dragon)}
            className="absolute top-6 right-6 text-3xl"
          >
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-slate-400" />}
          </button>

          <div className="flex flex-col items-center border-b pb-6">
            <img src={image} alt={dragon.name} className="h-48 w-48 object-contain bg-slate-50 rounded-2xl p-2" />
            <h1 className="text-3xl font-extrabold capitalize text-slate-800 mt-4">{dragon.name}</h1>
            <p className="text-sm font-semibold uppercase text-orange-600 mt-1">
              {dragon.types.map(t => t.type.name).join(' / ')}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Estadísticas de Combate</h3>
            <div className="space-y-3">
              {dragon.stats.slice(0, 3).map((s) => (
                <div key={s.stat.name} className="flex justify-between items-center bg-slate-50 p-3 rounded-xl">
                  <span className="capitalize text-slate-600 font-medium">{s.stat.name === 'hp' ? 'Vida (HP)' : s.stat.name === 'attack' ? 'Ataque' : 'Defensa'}</span>
                  <span className="font-bold text-slate-900 bg-slate-200 px-3 py-1 rounded-md text-sm">{s.base_stat} puntos</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default DragonDetail;