import { Pokemon } from "@/pokemons";
import { Metadata } from "next";
import { describe } from "node:test";


interface Props {
  params: { id: string }
}

export async function generateMetadata( {params}: Props ): Promise<Metadata> {

  const { id, name } = await getPokemon(params.id);
  return {
    title: `#${ id } - ${ name }`,
    description: `Pokemon page ${name}`
  }
}

const getPokemon = async (id: string): Promise<Pokemon> =>{
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`, {
    cache: 'force-cache' //TODO: Change this on future
  }).then( resp => resp.json() );

  console.log('Load ' + pokemon.name)
  return pokemon;
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Pokemon {params.id}</h1>
    </div>
  );
}