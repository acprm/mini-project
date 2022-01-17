import {Component} from "react";
import {MdSearch} from "react-icons/md"

class SearchBox extends Component<any, any> {
    state = {term: ""}

    render() {
        return (
            <div className="relative text-dark-gray block">
                <input
                    className="peer form-input w-full py-3 px-6 rounded-full bg-light-gray focus:outline-main-red focus:bg-white focus:text-black"
                    onChange={e => this.setState({term: e.target.value})}
                    value={this.state.term}
                    placeholder="Search here..."
                />
                <MdSearch
                    className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-6 peer-focus-within:text-main-red text-xl"/>
            </div>
        )
    }
}

export default SearchBox