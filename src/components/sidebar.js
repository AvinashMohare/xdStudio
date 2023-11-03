import { Link } from "react-router-dom";
import classes from "../styles/Sidebar.module.scss";
import Fiverr from "../assets/svgs/fiverr";
import Instagram from "../assets/svgs/instagram";
import Gmail from "../assets/svgs/gmail";
import Links from "../assets/svgs/chain";
import Twitter from "../assets/svgs/twitter";
const Sidebar = () => {
    return (
        <div className={classes.rootSidebar}>
            <div className={classes.container}>
                <div className={classes.name}>
                    <p>XDstudio</p>
                </div>

                <div className={classes.barcontainer}>
                    <Link to="/">
                        <p className={classes.item}>Portfolio</p>
                    </Link>

                    <Link to="/musicCovers">
                        <p className={classes.item}>Music Cover / Album Arts</p>
                    </Link>

                    <Link to="/about">
                        <p className={classes.item}>About</p>
                    </Link>

                    <Link to="/contact">
                        <p className={classes.item}>Contact</p>
                    </Link>

                    <div className={classes.socials}>
                        <div className={classes.appContainer}>
                            <div className={classes.app}>
                                <div className={classes.appName}>
                                    <Fiverr height="100%" width="100%" />
                                </div>

                                <div className={classes.appName}>
                                    <Instagram height="100%" width="100%" />
                                </div>

                                <div className={classes.appName}>
                                    <Gmail height="100%" width="100%" />
                                </div>

                                {/* <div className={classes.appName}>
                                    <Links height="100%" width="100%" />
                                </div> */}

                                <div className={classes.appName}>
                                    <Twitter height="100%" width="100%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
