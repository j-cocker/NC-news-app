import moment from "moment";

const Comment = ({ comment }) => {
    const id = comment.comment_id;
    console.log(id);
    const displayTime =
        id === "pending"
            ? moment.unix(Date.now() / 1000, "DD MMM YYYY hh:mm a").calendar()
            : moment
                  .unix(
                      Date.parse(comment.created_at) / 1000,
                      "DD MMM YYYY hh:mm a"
                  )
                  .calendar();
    return (
        <div
            key={comment.comment_id}
            className={"comment-card" + (id === "pending" ? " pending" : "")}
        >
            <p>{comment.author}</p>
            <p>{displayTime}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <br></br>
        </div>
    );
};

export default Comment;
