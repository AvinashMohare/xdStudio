import React, { useState } from "react";
import classes from "../styles/Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
    const [active, setActive] = useState(false);
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.name}>
                        <p>XDstudio</p>
                    </div>
                    <div onClick={() => setActive(!active)}>
                        <div
                            className={
                                active
                                    ? classes.activeHamburger
                                    : classes.hamburber
                            }
                            onClick={() => setActive(!active)}
                        ></div>
                    </div>
                </div>
            </div>
            <div
                className={active ? classes.activeSidenav : classes.sidenav}
                onClick={() => setActive(!active)}
            >
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
                </div>
            </div>
        </div>
    );
};

export default Header;
