import React from "react";
import PokeMoveType from '../common/PokeMoveType'

interface PokemonCardProps{
    pokeTypes: string[];
    pokeName: string;
    url: string;
    imgUrl: string;
    favorite: boolean
    onHeartClick: Function
}

class PokemonCard extends React.Component<PokemonCardProps>{

    render(): React.ReactNode {
        

        const renderType = () => this.props.pokeTypes.map((pokeType, idx) => {
            return <PokeMoveType type={pokeType} key={idx} />
        })

        const renderName = () =>{
            return this.props.pokeName[0].toUpperCase() + this.props.pokeName.slice(1)
        }

        const typeLen = this.props.pokeTypes.length;
        return(
            <div className="px-8 py-4 shadow-lg rounded-3xl w-96">
                <div className="flex flex-col items-center gap-5">
                    <div className="flex justify-between items-center w-full">
                        <a href={`/pokemon/${this.props.pokeName}`}>
                            <div className="flex items-center gap-4">
                                <img src={this.props.imgUrl} alt="Sprite" height={60} width={60} />
                                <div className="text-2xl font-semibold">{renderName()}</div>
                            </div>
                        </a>
                        <img src={this.props.favorite ? "/heart-solid.svg" : "/heart-outline.svg"} alt="Fav" onClick={()=>this.props.onHeartClick()} className="cursor-pointer" />
                    </div>
                    <div className={`flex ${typeLen === 1 ? 'justify-center' : 'justify-between'} gap-5 w-full`}>
                        {renderType()}
                    </div>
                </div>

            </div>
        )
    }
}

export default PokemonCard;