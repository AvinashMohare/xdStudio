import classes from "../styles/Contact.module.scss";
import Instagram from "../assets/svgs/instagram";
import Fiverr from "../assets/svgs/fiverr";
import Twitter from "../assets/svgs/twitter";
import Gmail from "../assets/svgs/gmail";

const Contact = () => {
    return (
        <div className={classes.rootContact}>
            <div className={classes.container}>
                <div className={classes.containerLeft}>
                    <h2>It's time to partner up.</h2>

                    <p>
                        I am here to listen and ready to help. Whether you're
                        seeking more information about our services, have a
                        project in mind, or just want to say hello, I'd love to
                        hear from you.
                    </p>

                    <p>
                        I will appreciate the opportunity to connect and look
                        forward to assisting you in any way I can.
                    </p>
                </div>
                <div className={classes.containerRight}>
                    <div className={classes.socials}>
                        <div className={classes.app}>
                            <Fiverr height="100%" width="100%" />
                        </div>
                        <div className={classes.link}>
                            <a
                                href="https://instagram.com/xd.studio_?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                <span>xd.studio_</span>
                            </a>
                        </div>
                    </div>

                    <div className={classes.socials}>
                        <div className={classes.app}>
                            <Instagram height="100%" width="100%" />
                        </div>
                        <div className={classes.link}>
                            <a
                                href="https://instagram.com/xd.studio_?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                <span>xd.studio_</span>
                            </a>
                        </div>
                    </div>

                    <div className={classes.socials}>
                        <div className={classes.app}>
                            <Twitter height="100%" width="100%" />
                        </div>
                        <div className={classes.link}>
                            <a
                                href="https://instagram.com/xd.studio_?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                <span>xd.studio_</span>
                            </a>
                        </div>
                    </div>

                    <div className={classes.socials}>
                        <div className={classes.app}>
                            <Gmail height="100%" width="100%" />
                        </div>
                        <div className={classes.link}>
                            <a
                                href="https://instagram.com/xd.studio_?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                <span>xd.studio_</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
