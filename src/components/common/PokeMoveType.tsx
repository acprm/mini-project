import React from "react";
import {Link} from 'react-router-dom'

interface PokeMoveTypeProps{
    id:number;
    large:boolean
}

interface TypeMapping{
    name:string;
    bgType:string;
}

interface IdMapping{
    [key:number]:TypeMapping
}

export default class PokeMoveType extends React.Component<PokeMoveTypeProps>{

    static defaultProps = {
        large: true
    }
    
    render(): React.ReactNode {

        const idMapping: IdMapping = {
            1:{name:'Normal', bgType:'bg-normal'},
            2:{name:'Fighting', bgType:'bg-fighting'},
            3:{name:'Flying', bgType:'bg-flying'},
            4:{name:'Poison',bgType:'bg-poison'},
            5:{name:'Ground', bgType:'bg-ground'},
            6:{name:'Rock', bgType:'bg-rock'},
            7:{name:'Bug', bgType:'bg-bug'},
            8:{name:'Ghost', bgType:'bg-ghost'},
            9:{name:'Steel', bgType:'bg-steel'},
            10:{name:'Fire', bgType:'bg-fire'},
            11:{name:'Water', bgType:'bg-water'},
            12:{name:'Grass', bgType:'bg-grass'},
            13:{name:'Electric', bgType:'bg-electric'},
            14:{name:'Psychic', bgType:'bg-psychic'},
            15:{name:'Ice', bgType:'bg-ice'},
            16:{name:'Dragon', bgType:'bg-dragon'},
            17:{name:'Dark', bgType:'bg-dark'},
            18:{name:'Fairy', bgType:'bg-fairy'}
            
            
        }

        return(
            <Link to={`/type/${this.props.id}`}>
                <div className={`${!this.props.large ? 'w-16 text-xxs' : 'w-32 text-xl py-2'} px-4 rounded-3xl text-center text-white font-semibold ${idMapping[this.props.id].bgType}`}>
                        {idMapping[this.props.id].name}
                </div>
            </Link>
        )
    }
}
