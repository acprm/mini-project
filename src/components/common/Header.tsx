import React, {ChangeEvent} from "react";
import SearchBox from './SearchBox'
import {Link} from "react-router-dom";
import {MdClose, MdHome} from "react-icons/md"
import MenuContainer from "../../containers/MenuContainer";

export enum Back {HOME, PREV}

interface HeaderProps {
    back: Back;
    favorite: boolean;
    searchTerm?: string;
    searchHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    searchActive?: boolean
}

interface HeaderState {
    menuOpen: boolean
}

export default class Header extends React.Component<HeaderProps, HeaderState> {
    state = {
        menuOpen: false
    }

    static defaultProps = {
        back: Back.PREV,
        favorite: false
    }

    toggleButton = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    renderMenuButton () {
        if (this.props.favorite) {
            return <img src="/heart-outline.svg" alt="Favorite"/>
        }
        else {
            return (
                <button onClick={this.toggleButton}>
                    {this.state.menuOpen ? <MdClose className="text-main-red text-2xl"/> :  <img src="/menu.svg" alt="Menu"/>}
                </button>
            )
        }
    }

    render(): React.ReactNode {
        return (
            <div>
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
                        {this.renderMenuButton()}
                    </div>
                </div>
                {this.state.menuOpen && <MenuContainer/> }
            </div>
        )
    }
}