import { useEffect, useState } from "react";
import { getTopics } from "../utility/getApi";
import { Link } from "react-router-dom";

const Topics = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then(({ topics }) => {
            const formatTopics = topics.map((topic) => {
                return (
                    <Link key={topics.slug} to={`/topics/${topic.slug}`}>
                        <div>
                            <h3>{topic.slug}</h3>
                        </div>
                    </Link>
                );
            });
            setTopics(formatTopics);
        });
    }, []);

    return (
        <>
            <h2>Topics</h2>
            {topics.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <section>{topics}</section>
            )}
        </>
    );
};

export default Topics;
