import { PokemonGrid } from "@/pokemons";



export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Favorite Pokemon
                
                <small className="text-blue-500">Global State</small>
            </span>
            <PokemonGrid pokemons={[]}/>
        </div>
    );
}