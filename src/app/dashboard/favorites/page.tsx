import { PokemonGrid, PokemonsResponse, SimplePokemon } from "../../../pokemons";
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'Favorites',
    description: 'Ad minin sit cupidarat culpa consectetur'
}

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">
                Favorites Pokemons
                
                <small className="text-blue-500">Static</small>
            </span>
            <PokemonGrid pokemons={[]}/>
        </div>
    );
}