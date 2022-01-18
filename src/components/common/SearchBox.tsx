import {ChangeEvent, Component} from "react";
import {MdSearch} from "react-icons/md"

interface SearchBoxProps {
    term?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    active?: boolean
}


class SearchBox extends Component<SearchBoxProps> {


    render() {
        return (
            <div className={"relative text-dark-gray block"}>
                <input
                    className={`peer form-input w-full py-3 px-6 rounded-full focus:text-black focus:outline-main-red border-2 transition-300 hover:bg-white ${this.props.active ? "bg-white border-main-red" : "bg-light-gray focus:bg-white"}`}
                    onChange={this.props.onChange}
                    value={this.props.term}
                    placeholder="Search here..."
                />
                <MdSearch
                    className={`pointer-events-none absolute top-1/2 transform -translate-y-1/2 right-6 peer-focus-within:text-main-red text-xl ${this.props.active && "text-main-red"}`}/>
            </div>
        )
    }
}

export default SearchBox