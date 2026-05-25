import { FaExclamationTriangle } from 'react-icons/fa';

function ErrorMessage({ message, retryFn }) {
  return (
    <div className="text-center p-10 max-w-md mx-auto my-10 bg-red-50 border border-red-200 rounded-2xl">
      <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />
      <h3 className="text-lg font-bold text-red-800">Error</h3>
      <p className="text-red-600 text-sm mt-1">{message}</p>
      {retryFn && (
        <button onClick={retryFn} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700">
          Reintentar conexión
        </button>
      )}
    </div>
  );
}
export default ErrorMessage;