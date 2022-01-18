import React, {ChangeEvent} from "react";
import SearchBox from './SearchBox'
import {Link} from "react-router-dom";
import {MdHome} from "react-icons/md"

export enum Back {HOME, PREV}

interface HeaderProps {
    back: Back;
    favorite: boolean;
    searchTerm?: string;
    searchHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    searchActive?: boolean
}

export default class Header extends React.Component<HeaderProps> {

    static defaultProps = {
        back: Back.PREV,
        favorite: false
    }


    render(): React.ReactNode {
        return (
            <div className="flex justify-center items-center gap-4 py-5">

                {(this.props.back === Back.PREV) ? (
                    // TODO make this work to go back to the previous route instead of home
                    <Link to="/">
                        <img src="/arrow-back.svg" alt="Back"/>
                    </Link>
                ) : (
                    <Link to="/">
                        <MdHome className="text-main-red text-2xl"/>
                    </Link>
                )
                }

                <Link to="/search">
                    <SearchBox onChange={this.props.searchHandler} term={this.props.searchTerm}
                               active={this.props.searchActive}/>
                </Link>
                <div className="cursor-pointer">
                    {this.props.favorite && <img src="/heart-outline.svg" alt="Favorite"/>}
                    {!this.props.favorite && <img src="/menu.svg" alt="Menu"/>}
                </div>

            </div>
        )
    }
}