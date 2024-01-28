const getAllPokemon = async () => {
  try {
    const response = await fetch('https://tyradex.vercel.app/api/v1/pokemon');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllPokemon;
