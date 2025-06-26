import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utility/getApi";
import ArticleCard from "./ArticleCard";

const Topic = () => {
    //
    const { topic } = useParams();

    const [topicArticles, setTopicArticles] = useState([]);

    useEffect(() => {
        getArticles({ topic: `${topic}` }).then(({ articles }) => {
            const formatArticles = articles.map((article) => {
                return (
                    <ArticleCard article={article} key={article.article_id} />
                );
            });
            setTopicArticles(formatArticles);
        });
    }, []);

    return (
        <>
            <h2>{topic}</h2>
            {topicArticles}
        </>
    );
};

export default Topic;
