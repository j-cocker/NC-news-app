import moment from "moment";
import Votes from "./Votes";
import { patchCommentVotes } from "../utility/patchApi";
import { deleteComment } from "../utility/deleteApi";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Comment = ({ comment, updateComments }) => {
    const id = comment.comment_id;

    const { currentUser } = useContext(UserContext);
    const [deleting, setDeleting] = useState(false);

    const displayTime =
        id === "pending"
            ? moment.unix(Date.now() / 1000, "DD MMM YYYY hh:mm a").calendar()
            : moment
                  .unix(
                      Date.parse(comment.created_at) / 1000,
                      "DD MMM YYYY hh:mm a"
                  )
                  .calendar();

    const removeComment = () => {
        //
        if (deleting) return;
        setDeleting(true);
        deleteComment(id)
            .then((res) => {
                updateComments();
            })
            .catch((err) => {
                //
            });
    };

    return (
        <div
            key={comment.comment_id}
            className={"comment-card" + (id === "pending" ? " pending" : "")}
        >
            {deleting ? (
                <p>deleting comment...</p>
            ) : (
                <>
                    <p style={{ display: "inline" }}>{comment.author}</p>
                    <p style={{ display: "inline" }}>{displayTime}</p>
                    {comment.author === currentUser.username ? (
                        <button onClick={removeComment}>X</button>
                    ) : (
                        <></>
                    )}

                    <p>{comment.body}</p>
                    <Votes
                        id={id}
                        votes={comment.votes}
                        patchFunc={patchCommentVotes}
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                </>
            )}
        </div>
    );
};

export default Comment;
