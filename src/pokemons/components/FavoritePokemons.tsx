'use client'
import { useAppSelector } from "@/store"
import { PokemonGrid } from ".."
import { useEffect, useState } from "react";
import { IoHeartCircleOutline, IoHeartOutline } from "react-icons/io5";


export const FavoritePokemons = () => {
    const favoritePokemons = useAppSelector( state =>  Object.values(state.pokemons.favorites ) );
    
    // const [pokemons, setPokemons] = useState(Object.values(favoritePokemons));

    // useEffect(()=>{
    //     setPokemons( Object.values(favoritePokemons) );
    // }, [favoritePokemons])
    
  return (<>
    {
        favoritePokemons.length === 0
        ? (<NoFavorites />)
        : (<PokemonGrid pokemons= { favoritePokemons } />)
    }
  </>
    
  )
}

export const NoFavorites = () =>{
    return(
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No favorites</span>

        </div>
    )
}