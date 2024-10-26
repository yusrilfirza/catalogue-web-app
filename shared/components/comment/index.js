import GhostButton from "../button/ghost";
import Rate from "../rate";

export default function Comment(props) {
    const { data } = props;

    const renderReply = (replyData) => (
        <div className="comment-reply-wrapper">
            <h4>{replyData.user}</h4>
            <p>{replyData.comment}</p>
            {
                replyData.reply.length > 0
                    ? replyData.reply.map((reply) => renderReply(reply))
                    : null
            }
        </div>
    );

    return (
        <div className="comment-wrapper">
            <h4>{data.user}</h4>
            <Rate rate={data.rating} />
            <p>{data.comment}</p>
            {
                data.reply.length > 0 ? data.reply.map((reply) => (
                    <div className="reply-area">
                        {renderReply(reply)}
                    </div>
                )) : null
            }
        </div>
    )
}