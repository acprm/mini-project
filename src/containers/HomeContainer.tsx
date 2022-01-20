import React from "react";
import { favorites } from "../helpers/local";
import PokemonCard from '../components/pokemon/PokemonCard'
import {pokemonDummy} from '../helpers/dummy';
import { addPokemonList, clearPokemonList} from '../redux/reducers/pokemonSlice'
import {RootState} from '../redux/store'
import {connect} from 'react-redux'

interface HomeProps {
    pokemons: {}[];
}

interface HomeState {
    favs: Array<string>
}

class HomeContainer extends React.Component<HomeProps, HomeState>{
    constructor(props: HomeProps){
        super(props);

        const lsData = favorites();
        if(lsData){
            this.state = {favs: JSON.parse(lsData)}
        } else {
            this.state = {favs: []}
        }
        
    }

    componentDidMount(): void { 
        console.log(this.state.favs);  
    }

    checkIfFavorite(name:string):boolean{
        if (this.state.favs.filter(item => name === item).length > 0) return true;
        else return false
    }
    
    handleHeartClick(name:string, favorite:boolean) {
        if(!favorite) {
            const newFavs = [...this.state.favs, name]
            this.setState({favs: newFavs });
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        }
        else if(favorite){
            const newFavs = this.state.favs.filter(item => item !== name)
            this.setState({favs: newFavs})
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        }
    }

    render(): React.ReactNode {
        const dummies = pokemonDummy;
        console.log(this.props);
        const renderPokemon = () => dummies && dummies.map((item,idx)=>{
                const fav = this.checkIfFavorite(item.name)
                return (
                <PokemonCard
                    key={idx}
                    pokeName={item.name}
                    imgUrl={item.imgUrl}
                    url={item.url}
                    favorite={fav}
                    pokeTypes={item.type}
                    onHeartClick={()=>this.handleHeartClick(item.name, fav)}
                />
                )
            }
        )

        return(
            <div className="flex flex-col items-center justify-center pt-5 border">
                <div className="font-semibold text-4xl mb-5">Pokemon</div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 border p-5">
                    {renderPokemon()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: RootState, prop:any ) =>{
    const {pokemon} = state;
    return { pokemons: pokemon.list }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        addPokemonList: ()=> dispatch(addPokemonList),
        clearPokemonList: ()=> dispatch(clearPokemonList)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);