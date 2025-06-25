import { useParams } from "react-router-dom";

const User = () => {
    const { username } = useParams();
    return (
        <>
            <h2>{username}</h2>
            <p>Hi! This is my user page!</p>
        </>
    );
};

export default User;
