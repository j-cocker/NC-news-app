import { getComments } from "../utility/getApi";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

const CommentSection = ({ article_id }) => {
    const [showComments, setShowComments] = useState(false);
    const [articleComments, setArticleComments] = useState([]);
    const [pendingComment, setPendingComment] = useState(null);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const getFormattedComments = () => {
        getComments(article_id).then(({ comments }) => {
            const formatComments = comments
                .map((comment) => {
                    //comments columns: body, votes, author, created_at
                    return (
                        <Comment
                            comment={comment}
                            updateComments={getFormattedComments}
                            key={comment.comment_id}
                        />
                    );
                })
                .reverse();
            setArticleComments(formatComments);
        });
    };

    useEffect(() => {
        if (!showComments || articleComments.length !== 0) {
            return;
        }
        getFormattedComments();
    }, [showComments]);

    useEffect(() => {
        if (!pendingComment) return;

        const formatPendingComment = (
            <Comment comment={pendingComment} key={pendingComment.comment_id} />
        );
        const tempComments = [formatPendingComment, ...articleComments];
        setArticleComments(tempComments);
    }, [pendingComment]);

    if (!showComments) {
        return (
            <button onClick={toggleComments} id="show-hide-comments-button">
                Show Comments
            </button>
        );
    }

    return (
        <>
            <button onClick={toggleComments} id="show-hide-comments-button">
                Hide Comments
            </button>
            <br />
            <CommentForm
                article_id={article_id}
                setPendingComment={setPendingComment}
                updateComments={getFormattedComments}
            />
            <section id="comments-section">{articleComments}</section>
        </>
    );
};

export default CommentSection;
