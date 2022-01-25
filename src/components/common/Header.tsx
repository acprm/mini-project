import React, {ChangeEvent} from "react";
import SearchBox from './SearchBox'
import {Link} from "react-router-dom";
import {MdClose, MdHome} from "react-icons/md"
import MenuContainer from "../../containers/MenuContainer";
import {RouteComponentProps, withRouter} from "react-router";
import {PathParamsType} from "../../type";
import {favorites} from "../../helpers/local";

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
    isFavorite: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);

        this.pokemonId = +this.props.match.params.id

        // Favorites data from local storage, unparsed
        this.lsData = favorites()

        if (this.lsData) {
            this.favorites = JSON.parse(this.lsData)
            this.state = {menuOpen: false, isFavorite: this.checkIfFavorite(this.pokemonId, this.favorites)}
        }
        else {
            this.state = {menuOpen: false, isFavorite: false}
        }
    }

    pokemonId: number
    lsData: string | null
    favorites: number[] = []

    static defaultProps = {
        back: Back.PREV,
        favorite: false
    }

    toggleMenuButton = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    checkIfFavorite(id: number, favorites: number[]): boolean {
        return (favorites.filter(item => id === item).length > 0);
    }

    handleHeartClick(id: number, favorites: number[]): void {
        if (!this.state.isFavorite) {
            const newFavs = [...favorites, id]
            this.setState({isFavorite: true});
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        } else if (this.state.isFavorite) {
            const newFavs = favorites.filter(item => item !== id)
            this.setState({isFavorite: false})
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        }
    }

    renderMenuButton() {
        if (this.props.favorite) {
            return (
                <button onClick={() => this.handleHeartClick(this.pokemonId, this.favorites)}>
                    <img
                        src={this.state.isFavorite ? `/heart-solid.svg` : `/heart-outline.svg`}
                        alt="Favorite"
                    />
                </button>
            )
        } else {
            return (
                <button onClick={this.toggleMenuButton}>
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
                        <button onClick={() => this.props.history.goBack()}>
                            <img src="/arrow-back.svg" alt="Back"/>
                        </button>
                    ) : (
                        <Link to="/">
                            <button type="button">
                                <MdHome className="text-main-red text-2xl"/>
                            </button>
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