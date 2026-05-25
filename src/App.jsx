import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DragonDetail from './pages/DragonDetail';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Routes>
      {/* 1. Ruta Raíz: Muestra el catálogo con el buscador */}
      <Route path="/" element={<Home />} />
      
      {/* 2. Ruta Dinámica: Muestra la info detallada y estadísticas de un dragón */}
      <Route path="/dragon/:name" element={<DragonDetail />} />
      
      {/* 3. Ruta de Favoritos: Muestra la lista de dragones guardados */}
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;