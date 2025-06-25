import { useState } from "react";
import TopBar from "./components/TopBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import GlobalNavigator from "./components/GlobalNavigator";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <TopBar />
            <Body />
            <Footer />
        </>
    );
}

export default App;
