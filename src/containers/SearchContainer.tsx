import {ChangeEvent, Component} from "react";
import {Link} from "react-router-dom";


import SearchBox from "../components/common/SearchBox";
import {KeyWord} from "../KeyWord";
import {capitalizeSingle} from "../helpers/capitalize"

// TODO 1. Create Close Toggle Button

class SearchContainer extends Component<any, any> {
    state = {term: ""}

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({term: e.target.value})
    }

    renderSuggestion() {
        const filtered = KeyWord.filter(({name}) => name.toLowerCase().indexOf(this.state.term.toLowerCase()) > -1).slice(0, 10)

        return filtered.map(({name, type, id}) => {
            return (
                <div key={`${type}-${id}`} className="px-6 hover:bg-light-gray rounded-full">
                    <Link to={`${type}/${id}`}>
                        <div className="flex justify-between py-3">
                            <span className="font-bold">{name}</span>
                            <span className="text-dark-gray">{capitalizeSingle(type)}</span>
                        </div>
                        <hr/>
                    </Link>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container mx-auto mt-10">
                <SearchBox
                    term={this.state.term}
                    onChange={this.handleChange}
                    inputClass="bg-white border-2 border-main-red"
                    iconClass="text-main-red"
                />
                {this.renderSuggestion()}
            </div>
        )
    }
}

export default SearchContainer