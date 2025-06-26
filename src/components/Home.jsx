import { getArticles } from "../utility/getApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import { formatTimeSpan } from "../utility/formatUtils";
import ArticleCard from "./ArticleCard";

const Home = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        getArticles().then(({ articles }) => {
            const formatArticles = articles.map((article) => {
                return <ArticleCard article={article} />;
            });
            setContent(formatArticles);
        });
    }, []);

    if (content.length === 0) {
        return <p>Loading...</p>;
    }
    return <>{content}</>;
};

export default Home;
