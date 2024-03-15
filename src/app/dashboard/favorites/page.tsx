
import { FavoritePokemons } from '@/pokemons';
import { Metadata } from 'next';
import { IoHeartCircleOutline, IoHeartOutline } from 'react-icons/io5';

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
            <FavoritePokemons />
        </div>
    );
}

