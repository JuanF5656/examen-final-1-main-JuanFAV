import { FaGhost } from 'react-icons/fa'; 

function EmptyState({ message }) {
  return (
    <div className="text-center p-12 bg-white border border-dashed rounded-2xl text-slate-400 max-w-md mx-auto mt-10 shadow-sm">
      <FaGhost className="text-slate-300 text-5xl mx-auto mb-4 animate-bounce" />
      <p className="text-lg font-medium text-slate-600">No hay dragones</p>
      <p className="text-sm text-slate-400 mt-1">
        {message || "Ningún dragón coincide."}
      </p>
    </div>
  );
}

export default EmptyState;