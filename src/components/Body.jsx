import Home from "./Home";
import Article from "./Article";
import User from "./User";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topics from "./Topics";
import Topic from "./Topic";

const Body = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <div id="mainContent">
            <Routes>
                <Route path="/" element={<Home setLoading={setLoading} />} />
                <Route
                    path="/articles/:id"
                    element={<Article setLoading={setLoading} />}
                />
                <Route path="/users/:username" element={<User />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/topics/:topic" element={<Topic />} />
            </Routes>
        </div>
    );
};

export default Body;
