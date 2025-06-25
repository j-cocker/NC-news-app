import moment from "moment";

const Comment = ({ comment }) => {
    const id = comment.comment_id;
    const displayTime = moment
        .unix(Date.parse(comment.created_at) / 1000, "DD MMM YYYY hh:mm a")
        .calendar();

    return (
        <div key={comment.comment_id} className="comment-card">
            <p>{comment.author}</p>
            <p>{displayTime}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <br></br>
        </div>
    );
};

export default Comment;
