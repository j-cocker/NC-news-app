import { useState } from "react";
import { postComment } from "../utility/postApi";

const CommentForm = ({ article_id, setPendingComment, updateComments }) => {
    const [currentInput, setCurrentInput] = useState("");
    const [error, setError] = useState(false);

    const handleComment = () => {
        setError(false);
        if (currentInput.length === 0) return;
        const username = "cooljmessy";

        const newComment = {
            comment_id: "pending",
            author: username,
            created_at: Date.now(),
            body: currentInput,
            votes: 0,
        };

        setPendingComment(newComment);

        postComment(article_id, username, `${currentInput}`)
            .catch((err) => {
                //console.log(err);
                setError(true);
            })
            .finally(() => {
                updateComments();
                setCurrentInput("");
            });
    };

    return (
        <form action={handleComment}>
            <p className="error">
                {error ? "Something went wrong, please try again later..." : ""}
            </p>
            <input
                placeholder="type here..."
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};

export default CommentForm;
