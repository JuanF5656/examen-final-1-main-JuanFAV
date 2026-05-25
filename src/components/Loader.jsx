import { FaSpinner } from 'react-icons/fa';

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-20 text-slate-600 animate-pulse">
      <FaSpinner className="animate-spin text-5xl text-orange-500 mb-4" />
      <p className="text-xl font-medium">Cargando...</p>
    </div>
  );
}
export default Loader;