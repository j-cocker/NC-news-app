import { useState } from "react";

const Votes = ({ id, votes, patchFunc }) => {
    const [currentVotes, setCurrentVotes] = useState(votes);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    const handleVote = (increment) => {
        if (pending) return;
        setPending(true);
        setCurrentVotes((currentVotes) => currentVotes + increment);

        patchFunc(id, increment)
            .then((res) => {
                const item = res[Object.keys(res)[0]];
                setCurrentVotes(item.votes);
            })
            .catch((err) => {
                setCurrentVotes((currentVotes) => currentVotes - increment);
                setError(true);
            })
            .finally(() => {
                setPending(false);
            });
    };

    return (
        <>
            {!error ? (
                <></>
            ) : (
                <p>Something went wrong, please try again later...</p>
            )}
            <p>Votes: {currentVotes}</p>
            <button
                onClick={() => {
                    handleVote(1);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    handleVote(-1);
                }}
            >
                -
            </button>
        </>
    );
};

export default Votes;
