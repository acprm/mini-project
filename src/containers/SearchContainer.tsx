import React, {ChangeEvent, Component} from "react";
import {Link} from "react-router-dom";
import {KeyWord} from "../KeyWord";
import {capitalizeSingle} from "../helpers/capitalize"
import Header, {Back} from "../components/common/Header";
import { appName } from "../helpers/baseContents";


class SearchContainer extends Component<any, any> {
    state = {term: ""}

    componentDidMount(){
        document.title = `${appName} - Search`
    }

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({term: e.target.value})
    }

    renderSuggestion() {
        const filtered = KeyWord.filter(({name}) => name.toLowerCase().indexOf(this.state.term.toLowerCase()) > -1).slice(0, 10)

        return filtered.map(({name, type, id}) => {
            return (
                <div key={`${type}-${id}`} className="px-6 hover:bg-light-gray rounded-full">
                    <Link to={`/${type}/${id}`}>
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
            <div className="container mx-auto">
                <Header
                    searchTerm={this.props.term}
                    searchHandler={this.handleChange}
                    searchActive={true}
                    back={Back.PREV}
                    favorite={false}
                />
                {this.renderSuggestion()}
            </div>
        )
    }
}

export default SearchContainer