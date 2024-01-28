const getAllPokemonByGeneration = async (gen: string) => {
  try {
    const response = await fetch(`https://tyradex.vercel.app/api/v1/gen/${gen}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPokemonByGeneration;
