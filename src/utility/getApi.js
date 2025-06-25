const baseURL = "https://nc-news-s52t.onrender.com/api/";

export const getArticles = () => {
    return fetch(baseURL + "articles/").then((res) => {
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
    return fetch(baseURL + `articles/${id}`).then((res) => {
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
    return fetch(baseURL + `articles/${article_id}/comments/`).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Oops, not found!",
            });
        }

        return res.json();
    });
};
