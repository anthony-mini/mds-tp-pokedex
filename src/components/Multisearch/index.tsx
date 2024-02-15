import { useState, useEffect } from 'react';
import Select, { Options } from 'react-select';
import { getAllPokemonByGeneration, getAllPokemon } from '../../services/index';
import { Pokemon } from '../../interfaces/index';
import { Option, MultiSearchComponentProps } from '../../interfaces/index';

const MultiSearchComponent: React.FC<MultiSearchComponentProps> = ({
  setSelectedPokemons,
  selectedGen
}) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (selectedGen === '0') {
        response = await getAllPokemon();
      } else {
        response = await getAllPokemonByGeneration(selectedGen);
      }
      setPokemons(response);
    };
    fetchData();
  }, [selectedGen]);

  const options: Option[] = Array.isArray(pokemons)
    ? pokemons.map((pokemon) => ({
        value: pokemon.pokedexId.toString(),
        label: pokemon.name?.fr
      }))
    : [pokemons];

  const handleChange = (selectedOptions: Options<Option> | null) => {
    if (selectedOptions) {
      const selectedPokemons = pokemons.filter((pokemon) =>
        selectedOptions.some(
          (option) => option.value === pokemon.pokedexId.toString()
        )
      );
      setSelectedPokemons(selectedPokemons);
    } else {
      setSelectedPokemons([]);
    }
  };

  return (
    <Select
      isMulti
      name="pokemons"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
      placeholder="Select pokemons..."
    />
  );
};

export default MultiSearchComponent;
