import React from "react";
import Container from "@mui/material/Container";

const DefaultLayout: React.FC = (props) => {
  return (
    <Container
      sx={{
        width: "100vw",
        minHeight: "100%",
        maxWidth: "100% !important",
        backgroundColor: "background.default",
        color: "primary.contrastText",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {props.children}
      </Container>
    </Container>
  );
};

export default DefaultLayout;
