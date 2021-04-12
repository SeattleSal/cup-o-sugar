import React from "react";
import { useLogout, useIsAuthenticated } from "../utils/auth";
import { Container, Jumbotron, Accordion, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderNav() {
  // user logged in or not
  const isAuthenticated = useIsAuthenticated();

  // ---- LOGOUT  ---- //
  const logout = useLogout();

  return (
    <Container>
      <Jumbotron
        className="jumbotron jumbotron-fluid text-center col-12"
        style={{
          backgroundColor: "rgba(95, 158, 160, 0.65)",
          borderRadius: "8px",
        }}
      >
        <Accordion>
          <div className="navContainer container">
            <Accordion.Toggle
              as={Button}
              className="fas fa-bars"
              variant="link"
              eventKey="0"
              style={{ color: "white", fontSize: "1.75rem" }}
            ></Accordion.Toggle>

            <h1 style={{ fontFamily: "'Lobster', cursive", color: "white" }}>
              Cup O Sugar
            </h1>

            <div>
              {isAuthenticated && (
                <Link to="/post"
                  className="nav-link fas fa-plus"
                  style={{ color: "white", fontSize: "1.75rem" }}
                />
              )}
            </div>
          </div>
          <Accordion.Collapse eventKey="0">
            <Card style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Link to="/" style={{ color: "rgba(95, 158, 160, 0.65)" }}>
                Home
              </Link>
              <Link to="/feed" style={{ color: "rgba(95, 158, 160, 0.65)" }}>
                Give Feed
              </Link>
              <Link to="/profile" style={{ color: "rgba(95, 158, 160, 0.65)" }}>
                Profile
              </Link>
              <Link
                to="/howitworks"
                style={{ color: "rgba(95, 158, 160, 0.65)" }}
              >
                How It Works
              </Link>
              <Link
                to="/guidelines"
                style={{ color: "rgba(95, 158, 160, 0.65)" }}
              >
                Guidelines
              </Link>
              {isAuthenticated && (
                <Button
                  variant="link"
                  onClick={logout}
                  style={{ color: "rgba(95, 158, 160, 0.65)" }}
                >
                  Log Out
                </Button>
              )}
            </Card>
          </Accordion.Collapse>
        </Accordion>
      </Jumbotron>
    </Container>
  );
}

export default HeaderNav;
