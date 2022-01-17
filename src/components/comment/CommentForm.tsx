import {Component} from "react";


class CommentForm  extends Component<any, any> {
    render () {
        return (
            <form className="flex flex-col gap-y-4">
                <input className="rounded-full border border-main-red px-4 py-3 focus:outline-main-red" placeholder="Your comments..."/>
                <div className="flex gap-x-4">
                    <input className="w-full rounded-full border border-main-red px-4 py-2 focus:outline-main-red" placeholder="Name"/>
                    <button className="basis-1/4 rounded-full bg-main-red font-bold text-white hover:bg-opacity-50">SEND</button>
                </div>
            </form>
        )
    }
}

export default CommentForm