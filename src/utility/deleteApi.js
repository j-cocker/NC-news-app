const baseURL = "https://nc-news-s52t.onrender.com/api";

export const deleteComment = (id) => {
    return fetch(`${baseURL}/comments/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    }).then((res) => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                msg: "Error deleting comment!",
            });
        }
        return res;
    });
};
