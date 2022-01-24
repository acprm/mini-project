import React, {ChangeEvent} from "react";
import SearchBox from './SearchBox'
import {Link} from "react-router-dom";
import {MdClose, MdHome} from "react-icons/md"
import MenuContainer from "../../containers/MenuContainer";
import {RouteComponentProps, withRouter} from "react-router";
import {PathParamsType} from "../../type";

export enum Back {HOME, PREV}

type HeaderProps = RouteComponentProps<PathParamsType> & {
    back: Back;
    favorite: boolean;
    searchTerm?: string;
    searchHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    searchActive?: boolean
}

interface HeaderState {
    menuOpen: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
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

    renderMenuButton() {
        if (this.props.favorite) {
            return <img src="/heart-outline.svg" alt="Favorite"/>
        } else {
            return (
                <button onClick={this.toggleButton}>
                    {this.state.menuOpen ? <MdClose className="text-main-red text-2xl"/> :
                        <img src="/menu.svg" alt="Menu"/>}
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
                        <button onClick={() => this.props.history.goBack()}>
                            <img src="/arrow-back.svg" alt="Back"/>
                        </button>
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
                {this.state.menuOpen && <MenuContainer/>}
            </div>
        )
    }
}

export default withRouter(Header)