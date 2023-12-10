import { Link } from "react-router-dom";
import classes from "../styles/Sidebar.module.scss";
import Fiverr from "../assets/svgs/bnw/fiverr";
import Instagram from "../assets/svgs/bnw/instagram";
import Gmail from "../assets/svgs/bnw/gmail";
import Links from "../assets/svgs/bnw/chain";
import Twitter from "../assets/svgs/bnw/twitter";
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
                        <p className={classes.item}>Music Cover & Album Arts</p>
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
                                    <a
                                        href="https://www.fiverr.com/purveshxd?public_mode=true"
                                        target="__blank_"
                                    >
                                        <Fiverr height="100%" width="100%" />
                                    </a>
                                </div>

                                <div className={classes.appName}>
                                    <a
                                        href=" https://www.instagram.com/xd.studio_/"
                                        target="__blank_"
                                    >
                                        <Instagram height="100%" width="100%" />
                                    </a>
                                </div>

                                <div className={classes.appName}>
                                    <a
                                        href="mailto:do.purveshxd@gmail.com"
                                        target="__blank_"
                                    >
                                        <Gmail height="100%" width="100%" />
                                    </a>
                                </div>

                                <div className={classes.appName}>
                                    <a
                                        href=" https://x.com/xdpurvesh?t=EW-OwouoJrDl8JxwHHGcjw&s=08"
                                        target="__blank_"
                                    >
                                        <Twitter height="100%" width="100%" />
                                    </a>
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
