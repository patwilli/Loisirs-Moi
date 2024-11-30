import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h4 style={styles.title}>À propos</h4>
                    <p style={styles.text}>
                        Ce site propose diverses activités pour tous les âges. Trouvez l'activité qui vous convient !
                    </p>
                </div>
                <div style={styles.section}>
                    <h4 style={styles.title}>Suivez-nous</h4>
                    <div style={styles.socialLinks}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Facebook
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Twitter
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            Instagram
                        </a>
                    </div>
                </div>
                <div style={styles.section}>
                    <h4 style={styles.title}>Contact</h4>
                    <p style={styles.text}>Email : contact@exemple.com</p>
                    <p style={styles.text}>Téléphone : +33 xx xxx x x</p>
                </div>
            </div>
            <div style={styles.bottomBar}>
                <p style={styles.bottomText}>
                    &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        marginTop: "20px",
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    section: {
        flex: "1",
        minWidth: "200px",
        margin: "10px",
    },
    title: {
        fontSize: "1.2rem",
        marginBottom: "10px",
        color: "#ff9800",
    },
    text: {
        fontSize: "0.9rem",
        marginBottom: "5px",
    },
    socialLinks: {
        display: "flex",
        flexDirection: "column",
    },
    link: {
        color: "#ff9800",
        textDecoration: "none",
        marginBottom: "5px",
    },
    linkHover: {
        textDecoration: "underline",
    },
    bottomBar: {
        borderTop: "1px solid #444",
        textAlign: "center",
        paddingTop: "10px",
    },
    bottomText: {
        fontSize: "0.8rem",
        color: "#aaa",
    },
};

export default Footer;
