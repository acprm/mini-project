import React from "react";
import {RootState} from '../redux/store'
import {connect} from 'react-redux'
import {favorites} from "../helpers/local";
import PokemonCard from '../components/pokemon/PokemonCard'
import {fetchPokemon, PokemonState} from "../redux/reducers/pokemonSlice";
import { appName } from "../helpers/baseContents";

interface FavoriteProps {
    pokemon: PokemonState,
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void
}

interface FavoriteState {
    favs: Array<number>
}

 
class FavoriteContainer extends React.Component<FavoriteProps, FavoriteState> {
    constructor(props: FavoriteProps) {
        super(props);
        const lsData = favorites();
        if (lsData) {
            this.state = {favs: JSON.parse(lsData)}
        } else {
            this.state = {favs: []}
        }
    }

    componentDidMount(): void {
        if(this.state.favs.length > 0){
            this.callApi();
        }
        document.title = `${appName} - Favorites`
    }
    
    async callApi(){
        await this.props.fetchPokemon({id:this.state.favs})
    }

    checkIfFavorite(id: number): boolean {
        return this.state.favs.filter(item => id === item).length > 0;
    }

    handleHeartClick(id: number, favorite: boolean) {
        if (!favorite) {
            const newFavs = [...this.state.favs, id]
            this.setState({favs: newFavs});
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        } else if (favorite) {
            const newFavs = this.state.favs.filter(item => item !== id)
            this.setState({favs: newFavs})
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        }
    }

    renderPokemon = () => this.props.pokemon.list && this.props.pokemon.list.map((item) => {
        const fav = this.checkIfFavorite(item.id)
        return (
                <div className={`${!fav && 'hidden'}`} key={item.id}>
                    <PokemonCard
                        pokeName={item.name}
                        imgUrl={item.sprite}
                        url={item.sprite}
                        favorite={fav}
                        pokeTypes={item.types}
                        onHeartClick={() => this.handleHeartClick(item.id, fav)}
                        id={item.id}
                    />
                </div>
            
        )
    }
)


    render() { 
        return ( 
            <div className="flex flex-col items-center justify-center pt-5">
                <div className="font-semibold text-4xl mb-5">Favorites</div>
                {this.state.favs.length > 0 ? (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
                    {this.renderPokemon()}
                </div>
                ) : (
                    <div className="text-center">
                        Look for your favorite Pokemons!
                    </div>
                )}
                
            </div>
         );
    }
}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
})

export default connect(mapStateToProps, {fetchPokemon})(FavoriteContainer);