import {Component} from "react";

interface CommentProps {
    name: string;
    comment: string;
    timestamp: Date;
}

class Comment extends Component<CommentProps> {
    render() {
        return (
            <div>
                <div className="pt-4 flex justify-between items-end">
                    <span className="font-bold text-[18px]">{this.props.name}</span>
                    <span className="text-[12px] text-dark-gray">{this.props.timestamp.toDateString()}</span>
                </div>
                <div className="pt-3 pb-4 text-[18px]">
                    {this.props.comment}
                </div>
                <hr/>
            </div>
        )
    }
}

export default Comment