import React from "react";
import {Link} from 'react-router-dom'

interface PokeMoveTypeProps{
    type:string;
    id:number;
    large:boolean
}

export default class PokeMoveType extends React.Component<PokeMoveTypeProps>{

    static defaultProps = {
        large: true
    }
    
    render(): React.ReactNode {

        const bgType:{[key:string]:string} = {
            grass: 'bg-grass',
            normal: 'bg-normal',
            fighting: 'bg-fighting',
            flying: 'bg-flying',
            poison: 'bg-poison',
            ground: 'bg-ground',
            rock: 'bg-rock',
            bug: 'bg-bug',
            ghost: 'bg-ghost',
            steel: 'bg-steel',
            fire: 'bg-fire',
            water: 'bg-water',
            electric: 'bg-electric',
            psychic: 'bg-psychic',
            ice: 'bg-ice',
            dragon: 'bg-dragon',
            dark: 'bg-dark',
            fairy: 'bg-fairy'
        }

        let renderType = this.props.type[0].toUpperCase() + this.props.type.slice(1)

        return(
            <Link to={`/type/${this.props.id}`}>
                <div className={`${!this.props.large ? 'w-16 text-xxs' : 'w-32 text-xl py-2'} px-4 rounded-3xl text-center text-white font-semibold ${bgType[this.props.type]}`}>
                        {renderType}
                </div>
            </Link>
        )
    }
}
