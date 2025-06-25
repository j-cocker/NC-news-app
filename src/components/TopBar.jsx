import GlobalNavigator from "./GlobalNavigator";
import Header from "./Header";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="top-bar">
            <Link to={"/"}>
                <Header />
            </Link>
            <GlobalNavigator />
        </div>
    );
};

export default TopBar;
