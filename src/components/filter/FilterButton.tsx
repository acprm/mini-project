import {Component} from "react";
import {MdFilterList} from "react-icons/md";
import {ComponentPropsMin} from "../../type";
import {connect} from "react-redux";
import {ModalsState, openFilter} from "../../redux/reducers/modalsSlice";
import {RootState} from "../../redux/store";


interface FilterButtonProps extends ComponentPropsMin {
    modals: ModalsState
    openFilter: () => void
}


class FilterButton extends Component <FilterButtonProps> {
    render() {
        return (
            <button
                className={`bg-main-red p-5 rounded-full hover:shadow-lg hover:shadow-main-red/50 duration-300 ${this.props.className}`}
                onClick={() => this.props.openFilter()}
            >
                <MdFilterList className="text-2xl text-white"/>
            </button>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    modals: state.modals,
})

export default connect(mapStateToProps, {openFilter})(FilterButton)
