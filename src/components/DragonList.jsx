import DragonCard from './DragonCard';

function DragonList({ dragons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {dragons.map((dragon) => (
        <DragonCard key={dragon.id} dragon={dragon} />
      ))}
    </div>
  );
}

export default DragonList;