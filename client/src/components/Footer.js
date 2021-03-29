import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {

    return (

        <Container >
        <footer className="footer" style={{ minHeight: "1rem", textAlign:"center", display:"flex", justifyContent:"center", marginTop: "1.25rem", backgroundColor:"rgba(95, 158, 160, 0.65)", fontFamily:"'Montserrat', sans-serif", borderRadius:"8px", position:"relative", bottom:"0", width:"100%" }}>
            <p style={{ fontSize: ".75rem", color: "white", marginTop:"1rem"}}>&copy; cuposugar 2021</p>
        </footer>
        </Container>

    );
};

export default Footer;