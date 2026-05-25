import { useFavorites } from '../context/FavoritesContext';
import DragonCard from '../components/DragonCard';
import Navbar from '../components/Navbar';

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-slate-800 my-6">Dragones Guardados</h1>

        {favorites.length === 0 ? (
          <div className="text-center p-12 bg-white border rounded-2xl text-slate-400">
            <p className="text-lg font-medium">No hay ningun favorito.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((dragon) => (
              <DragonCard key={dragon.id} dragon={dragon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Favorites;