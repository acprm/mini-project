import React from "react";
import { Link } from "react-router-dom";
import PokeMoveType from './PokeMoveType'

interface ListProps{
    category: 'move' | 'pokemon' | 'ability'
    types:number[];
    item:string;
    imgUrl:string;
    id:number;
}

export default class List extends React.Component<ListProps>{
    static defaultProps = {
        imgUrl: '',
        types: []
    }

    render(): React.ReactNode {

        const renderType = () => this.props.types && this.props.types.map((itemType, idx) => {
            return <PokeMoveType id={itemType} key={idx} large={false} />
        })

        return (
            <div className="flex justify-between w-full">
                <div className="flex px-2 gap-5">
                    {this.props.imgUrl.length > 0 && <img src={this.props.imgUrl} alt="Sprite" width={30} height={30} />}
                    <Link to={`/${this.props.category}/${this.props.id}`}>
                        <div className='text-lg font-semibold'>{this.props.item}</div>
                    </Link>
                </div>
                <div className="flex gap-3 items-center px-2">
                    {renderType()}
                </div>
            </div>
        )
    }
}