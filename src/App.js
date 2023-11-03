import classes from "./App.module.scss";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MusicCovers from "./pages/musicCovers";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";

function App() {
    return (
        <BrowserRouter>
            <div className={classes.rootApp}>
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>
                <div className={classes.canvas}>
                    <Routes>
                        <Route path="/" element={<Portfolio />}></Route>
                        <Route
                            path="/musicCovers"
                            element={<MusicCovers />}
                        ></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
