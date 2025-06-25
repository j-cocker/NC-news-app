const baseURL = "https://nc-news-s52t.onrender.com/api";

export const postComment = (id, username, input) => {
    return fetch(`${baseURL}/articles/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, body: input }),
    }).then((res) => {
        if (!res.ok) {
            console.log(res.json());
            return Promise.reject({
                status: res.status,
                msg: "Error adding comment!",
            });
        }
        console.log(res);
        return res.json();
    });
};
