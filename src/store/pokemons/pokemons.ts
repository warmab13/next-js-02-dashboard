import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface PokemonsState {
    favorites: {[ key: string ]: SimplePokemon},
}

// const getInitialState = () => {

//     const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}')

//     return favorites;
// }

const initialState: PokemonsState = {
    //...getInitialState()
    favorites: {},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ){
        state.favorites = action.payload;
    },

    toogleFavorite(state, action: PayloadAction<SimplePokemon>){

        const pokemon = action.payload;
        const { id } = pokemon;

        if( !!state.favorites[id]){
            delete state.favorites[id];
            return;
        }else{
            state.favorites[id] = pokemon;
        }

        //TODO: No se debe de hacer en redux
        localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ));

    }

  }
});

export const { toogleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer