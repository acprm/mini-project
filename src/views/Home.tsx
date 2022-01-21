import HomeContainer from '../containers/HomeContainer'
import HomeLayout from '../layouts/HomeLayout'
import FilterButton from "../components/filter/FilterButton";
import {Component} from "react";
import {connect} from "react-redux";
import {RootState} from "../redux/store";
import {ComponentPropsMin} from "../type";
import {ModalsState, closeFilter} from "../redux/reducers/modalsSlice";
import FilterModal from "../components/filter/FilterModal";

interface HomeProps extends ComponentPropsMin {
    modals: ModalsState
    closeFilter: () => void
}

class Home extends Component<HomeProps> {
    render() {
        return (
            <>
                <div className={this.props.modals.filter ? "" : "hidden"}>
                    <div
                        className="fixed w-screen h-screen bg-black bg-opacity-20 flex items-center z-10"
                        onClick={() => this.props.closeFilter()}
                    >
                        <FilterModal/>
                    </div>
                </div>
                <HomeLayout>
                    <FilterButton className="fixed right-20 bottom-20"/>
                    <HomeContainer/>
                </HomeLayout>
            </>
        )
    }

}

const mapStateToProps = (state: RootState) => ({
    modals: state.modals,
})

export default connect(mapStateToProps, {closeFilter})(Home)
