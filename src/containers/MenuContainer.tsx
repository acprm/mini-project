import React, {Component} from "react";
import {Link} from "react-router-dom";

class MenuContainer extends Component<any, any> {
    menuList = [
        {id: 1, name: "Home", path: "/"},
        {id: 2, name: "Favorites", path: "/favorites"}
    ]

    render() {
        return (
            <div className="px-6">
                <div>
                    <hr/>
                    {this.menuList.map(({id, name, path}) => (
                        <div key={id} className="hover:bg-light-gray">
                            <Link to={path}>
                                <div className="py-2 flex justify-center">
                                    <span className="text-md">{name}</span>
                                </div>
                                <hr/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default MenuContainer