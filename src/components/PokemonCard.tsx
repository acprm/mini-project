import React from "react";
import PokeMoveType from './PokeMoveType'

interface PokemonCardProps{
    pokeTypes: string[];
    pokeName: string;
    url: string;
}

class PokemonCard extends React.Component<PokemonCardProps>{
   

    render(): React.ReactNode {
        

        const list = () => this.props.pokeTypes.map((pokeType, idx) => {
            return <PokeMoveType type={pokeType} key={idx} />
        })

        const typeLen = this.props.pokeTypes.length;
        return(
            <div className="px-8 py-4 shadow-2xl rounded-3xl w-96">
                <div className="flex flex-col items-center gap-5">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <img src={this.props.url} alt="Sprite" height={60} width={60} />
                            <div className="text-2xl font-semibold">{this.props.pokeName}</div>
                        </div>
                        <img src="/heart-outline.svg" alt="" />
                    </div>
                    <div className={`flex ${typeLen === 1 ? 'justify-center' : 'justify-between'} gap-5 w-full`}>
                        {list()}
                    </div>
                </div>

            </div>
        )
    }
}

export default PokemonCard;