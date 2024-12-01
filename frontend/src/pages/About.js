import React from "react";

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>À propos de nous</h1>
            <p style={styles.paragraph}>
                Bienvenue sur notre plateforme ! Nous proposons une vaste sélection
                d'activités pour tous les âges et tous les niveaux. Que vous soyez à la
                recherche d'une activité artistique, sportive ou éducative, nous avons
                quelque chose pour vous.
            </p>
            <p style={styles.paragraph}>
                Notre mission est de rendre les loisirs accessibles à tous, tout en
                favorisant l'engagement communautaire et la découverte de nouvelles
                passions.
            </p>
            <div style={styles.team}>
                <h2 style={styles.subtitle}>Notre Équipe</h2>
                <p style={styles.paragraph}>
                    Nous sommes une équipe passionnée, dédiée à offrir des expériences
                    uniques et enrichissantes. Chaque membre de notre équipe travaille
                    avec cœur pour répondre à vos attentes.
                </p>
            </div>
            <div style={styles.contact}>
                <h2 style={styles.subtitle}>Contactez-nous</h2>
                <p style={styles.paragraph}>
                    Si vous avez des questions, n'hésitez pas à nous contacter à :{" "}
                    <a href="mailto:contact@notreplateforme.com" style={styles.link}>
                        contact@notreplateforme.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
        lineHeight: "1.6",
    },
    title: {
        fontSize: "2.5rem",
        color: "#333",
        marginBottom: "20px",
    },
    subtitle: {
        fontSize: "1.8rem",
        color: "#555",
        marginBottom: "15px",
    },
    paragraph: {
        fontSize: "1rem",
        color: "#666",
        marginBottom: "15px",
    },
    link: {
        color: "#FF9800",
        textDecoration: "none",
    },
    team: {
        marginTop: "30px",
    },
    contact: {
        marginTop: "30px",
    },
};

export default About;
