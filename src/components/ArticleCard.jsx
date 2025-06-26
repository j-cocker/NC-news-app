import moment from "moment";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const timeSpan = moment.unix(
        Date.parse(article.created_at) / 1000,
        "DD MMM YYYY hh:mm a"
    );

    const displayTime =
        timeSpan.days() > 7 ? timeSpan.fromNow() : timeSpan.calendar();

    //new Date(article.created_at).toLocaleDateString("en-GB");

    return (
        <div className="ListItem">
            <Link
                to={`/articles/${article.article_id}`}
                key={article.article_id}
            >
                <h2>{article.title}</h2>
            </Link>
            <Link to={`/users/${article.author}`}>
                <p>{article.author}</p>
            </Link>
            <img src={article.article_img_url} />
            <p>{displayTime}</p>
            <div>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.comment_count}</p>
            </div>
        </div>
    );
};

export default ArticleCard;
