const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=30";

export const fetchDragons = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Error al conectar");
    
    const data = await response.json();
    
    const detailedDragons = await Promise.all(
      data.results.map(async (dragon) => {
        const res = await fetch(dragon.url);
        return await res.json();
      })
    );
    
    return detailedDragons; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};