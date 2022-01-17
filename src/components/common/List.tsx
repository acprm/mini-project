import React from "react";
import PokeMoveType from './PokeMoveType'

interface ListProps{
    types:string[];
    item:string;
    imgUrl:string;
}

export default class List extends React.Component<ListProps>{
    static defaultProps = {
        imgUrl: ''
    }

    render(): React.ReactNode {

        const renderType = () => this.props.types.map((itemType, idx) => {
            return <PokeMoveType type={itemType} key={idx} large={false} />
        })

        return (
            <div className="flex justify-between w-full">
                <div className="flex px-2 gap-5">
                    {this.props.imgUrl.length > 0 && <img src={this.props.imgUrl} alt="Sprite" width={30} height={30} />}
                    <div className='text-lg font-semibold'>{this.props.item}</div>
                </div>
                <div className="flex gap-3 items-center px-2">
                    {renderType()}
                </div>
            </div>
        )
    }
}