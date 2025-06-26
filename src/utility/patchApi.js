const baseURL = "https://nc-news-s52t.onrender.com/api";

export const patchArticleVotes = (id, vote) => {
    return fetch(`${baseURL}/articles/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inc_votes: vote }),
    }).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Error adding votes!",
            });
        }
        return res.json();
    });
};

export const patchCommentVotes = (id, vote) => {
    return fetch(`${baseURL}/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inc_votes: vote }),
    }).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Error adding votes!",
            });
        }
        return res.json();
    });
};
