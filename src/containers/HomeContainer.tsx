import React from "react";
import { favorites } from "../helpers/local";
import PokemonCard from '../components/pokemon/PokemonCard'
import List from '../components/common/List'
interface HomeProps {
}

interface HomeState {
    favs: Array<string>
}

export default class HomeContainer extends React.Component<HomeProps, HomeState>{
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
        const arr = [
            {name:'charizard', imgUrl:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', url:'https://pokeapi.co/api/v2/pokemon/charizard', type: ['fire', 'flying']},
            {name: 'wartortle', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', url:'https://pokeapi.co/api/v2/pokemon/wartortle', type:['water']},
            {name: 'articuno', imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png', url:'https://pokeapi.co/api/v2/pokemon/articuno', type:['ice','flying']}
        ]

        const renderPokemon = () => arr && arr.map((item)=>{
                const fav = this.checkIfFavorite(item.name)
                return (
                <PokemonCard
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
            <div className="container mx-auto flex flex-col items-center justify-center pt-5">
                <div className="font-semibold text-4xl mb-5">Pokemon</div>
                <div className="flex flex-col gap-5">
                    {renderPokemon()}
                </div>
                <div className="w-full">
                    <List item='Venusaur' types={['fire','grass']} />
                </div>
            </div>
        )
    }

}