export interface Name {
  fr: string;
  en: string;
  jp: string;
}

export interface Sprites {
  regular: string;
  shiny: string;
  gmax: string | null;
}

export interface Type {
  name: string;
  image: string;
}

export interface Talent {
  name: string;
  tc: boolean;
}

export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface Resistance {
  name: string;
  multiplier: number;
}

export interface Evolution {
  pokedexId: number;
  name: string;
  condition: string;
}

export interface EvolutionChain {
  pre: Evolution | null;
  next: Evolution[];
  mega: Evolution | null;
}

export interface Sexe {
  male: number;
  female: number;
}

export interface Data {
  pokedexId: number;
  generation: number;
  category: string;
  name: Name;
  sprites: Sprites;
  types: Type[];
  talents: Talent[];
  stats: Stats;
  resistances: Resistance[];
  evolution: EvolutionChain;
  height: string;
  weight: string;
  egg_groups: string[];
  sexe: Sexe;
  catch_rate: number;
  level_100: number;
  forme: string | null;
}
