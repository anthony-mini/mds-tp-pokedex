const getPokemonById = async (id: string) => {
  try {
    const response = await fetch(
      `https://tyradex.vercel.app/api/v1/pokemon/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getPokemonById;
