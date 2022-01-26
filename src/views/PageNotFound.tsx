import {Component} from "react";
import {Link} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {MdHome} from "react-icons/md";
import {connect} from 'react-redux'
import {setTypesIdle} from '../redux/reducers/typesSlice'
import {setMovesIdle} from '../redux/reducers/movesSlice'
import {setPokemonIdle} from '../redux/reducers/pokemonSlice'
import {setAbilitiesIdle} from '../redux/reducers/abilitiesSlice'

interface PageNotFoundProps {
    setTypesIdle: () => void
    setMovesIdle: () => void
    setPokemonIdle: () => void
    setAbilitiesIdle: () => void
}

class PageNotFound extends Component<PageNotFoundProps> {
    componentDidMount() {
        this.props.setTypesIdle();
        this.props.setMovesIdle();
        this.props.setPokemonIdle();
        this.props.setAbilitiesIdle();
    }

    render() {
        return (
            <MainLayout>
                <div className="flex flex-col justify-center items-center h-[80vh]">
                    <h1 className="font-semibold text-4xl">Page Not Found</h1>
                    <img className="w-[25rem] rounded-lg my-10" src="/surprised-pikachu.gif" alt="Surprised Pikachu"/>
                    <Link to="/">
                        <button
                            className="flex items-center py-3 px-5 font-semibold text-white bg-main-red rounded-full hover:shadow-lg hover:shadow-main-red/50 duration-300 text-xl"
                        >
                            <MdHome className="mr-2"/>
                            Go To Home Page
                        </button>
                    </Link>
                </div>
            </MainLayout>
        );
    }
}

export default connect(null, {setTypesIdle, setMovesIdle, setPokemonIdle, setAbilitiesIdle})(PageNotFound)