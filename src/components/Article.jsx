import moment from "moment";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utility/getApi";
import { Link } from "react-router-dom";
import CommentSection from "./CommentSection";
import Votes from "./Votes";
import { patchArticleVotes } from "../utility/patchApi";

const Article = () => {
    const { id } = useParams();

    const [currentArticle, setCurrentArticle] = useState(null);

    useEffect(() => {
        getArticle(id).then(({ article }) => {
            const displayTime = moment
                .unix(
                    Date.parse(article.created_at) / 1000,
                    "DD MMM YYYY hh:mm a"
                )
                .calendar();
            const formatArticle = (
                <>
                    <h2>{article.title}</h2>
                    <h3>{article.topic}</h3>
                    <Link to={`users/${article.author}`}>
                        <p>{article.author}</p>
                    </Link>
                    <p>{displayTime}</p>
                    <img src={article.article_img_url} />
                    <Votes
                        id={article.article_id}
                        votes={article.votes}
                        patchFunc={patchArticleVotes}
                    />
                    <p>{article.body}</p>
                </>
            );

            setCurrentArticle(formatArticle);
        });
    }, []);

    if (!currentArticle) {
        return <p>Loading...</p>;
    }

    return (
        <>
            {currentArticle}
            <CommentSection article_id={id} />
        </>
    );
};

export default Article;
