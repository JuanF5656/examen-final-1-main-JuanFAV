import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function DragonCard({ dragon }) {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === dragon.id);

  const image = dragon.sprites.other['official-artwork'].front_default || dragon.sprites.front_default;
  const types = dragon.types.map(t => t.type.name).join(', ');

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="relative bg-slate-100 rounded-xl p-4 flex justify-center">
        <img src={image} alt={dragon.name} className="h-40 w-40 object-contain" />
        <button 
          onClick={() => isFavorite ? removeFromFavorites(dragon.id) : addToFavorites(dragon)}
          className="absolute top-3 right-3 text-2xl p-1 drop-shadow-sm transition-transform active:scale-90"
        >
          {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-slate-400 hover:text-red-400" />}
        </button>
      </div>
      
      <div className="mt-4">
        <h3 className="text-xl font-bold capitalize text-slate-800">{dragon.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-orange-600 mt-1">{types}</p>
      </div>

      <Link to={`/dragon/${dragon.name}`} className="mt-4 block text-center bg-slate-900 text-white py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors">
        Ver estadísticas
      </Link>
    </div>
  );
}
export default DragonCard;