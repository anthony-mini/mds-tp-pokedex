import Select, { Options } from 'react-select';
import { Option } from '../../interfaces/index';
import { MultiSearchComponentProps } from '../../interfaces/index';

// Définition du composant MultiSearchComponent
const MultiSearchComponent: React.FC<MultiSearchComponentProps> = ({
  setSelectedPokemons,
  pokemons
}) => {
  // Génération des options pour le composant Select
  const options: Option[] = Array.isArray(pokemons)
    ? pokemons.map((pokemon) => ({
        value: pokemon.pokedexId.toString(),
        label: pokemon.name?.fr || 'missing name'
      }))
    : [pokemons];

  // Fonction pour gérer le changement de sélection
  const handleChange = (selectedOptions: Options<Option> | null) => {
    if (selectedOptions) {
      // Filtrage des pokemons en fonction de la sélection de l'utilisateur
      const selectedPokemons = pokemons.filter((pokemon) =>
        selectedOptions.some(
          (option) => option.value === pokemon.pokedexId.toString()
        )
      );
      // Mise à jour de l'état selectedPokemons
      setSelectedPokemons(selectedPokemons);
    } else {
      // Réinitialisation de l'état selectedPokemons si l'utilisateur a supprimé toutes les sélections
      setSelectedPokemons([]);
    }
  };

  // Rendu du composant Select
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
