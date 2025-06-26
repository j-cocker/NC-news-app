const baseURL = "https://nc-news-s52t.onrender.com/api";

export const getTopics = () => {
    return fetch(`${baseURL}/topics`).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Oops, not found!",
            });
        }

        return res.json();
    });
};

export const getArticles = ({ topic, sort_by, order } = {}) => {
    const queryChain = [];
    if (topic) queryChain.push(`topic=${topic}`);
    if (sort_by) queryChain.push(`sort_by=${sort_by}`);
    if (order) queryChain.push(`order=${order}`);

    const query = queryChain.length !== 0 ? `?` + queryChain.join("&") : "";

    return fetch(`${baseURL}/articles${query}`).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Oops, not found!",
            });
        }

        return res.json();
    });
};

export const getArticle = (id) => {
    return fetch(`${baseURL}/articles/${id}`).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Oops, not found!",
            });
        }

        return res.json();
    });
};

export const getComments = (article_id) => {
    return fetch(`${baseURL}/articles/${article_id}/comments/`).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Oops, not found!",
            });
        }

        return res.json();
    });
};
