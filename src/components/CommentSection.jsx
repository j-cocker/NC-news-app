import { getComments } from "../utility/getApi";
import Comment from "./Comment";
import { useEffect, useState } from "react";

const CommentSection = ({ article_id }) => {
    const [showComments, setShowComments] = useState(false);
    const [articleComments, setArticleComments] = useState([]);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    useEffect(() => {
        if (!showComments || articleComments.length !== 0) {
            console.log(
                "enter useEffect if statement catch" +
                    showComments +
                    articleComments
            );
            return;
        }

        getComments(article_id).then(({ comments }) => {
            console.log(comments);
            const formatComments = comments.map((comment) => {
                //comments columns: body, votes, author, created_at
                return <Comment comment={comment} />;
            });
            setArticleComments(formatComments);
        });
    }, [showComments]);

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
            <section id="comments-section">{articleComments}</section>
        </>
    );
};

export default CommentSection;
