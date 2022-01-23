import {Component, FormEvent} from "react";
import {CommentProps} from "./Comment";

interface CommentFormState extends CommentProps {}

interface CommentFormProps {
    pokemonId: number
    refreshComment: (newComments: CommentProps[]) => void
}

class CommentForm  extends Component<CommentFormProps, CommentFormState> {
    state = {
        comment: "",
        name: "",
        timestamp: new Date().toDateString()
    }

    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const key = `comment-${this.props.pokemonId}`

        if (this.state.comment && this.state.name) {
            this.setState({timestamp: new Date().toDateString()})
            const prevComment = localStorage.getItem(key)
            let newComments
            if (prevComment) {
                newComments = [...JSON.parse(prevComment), this.state]
            }
            else {
                newComments = [this.state]
            }
            localStorage.setItem(key, JSON.stringify(newComments))
            this.props.refreshComment(newComments)
            this.setState({comment: "", name: ""})
        }
        else {
            alert("Please don't leave the comment or name to be blank.")
        }
    }

    render () {
        return (
            <form className="flex flex-col gap-y-4" onSubmit={(event) => this.handleSubmit(event)}>
                <input
                    className="rounded-full border border-main-red px-4 py-3 focus:outline-main-red"
                    placeholder="Your comments..."
                    value={this.state.comment}
                    onChange={(event) => this.setState({comment: event.target.value})}
                />
                <div className="flex gap-x-4">
                    <input
                        className="w-full rounded-full border border-main-red px-4 py-2 focus:outline-main-red"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(event) => this.setState({name: event.target.value})}
                    />
                    <button className="basis-1/4 rounded-full bg-main-red font-bold text-white hover:bg-opacity-50">SEND</button>
                </div>
            </form>
        )
    }
}

export default CommentForm