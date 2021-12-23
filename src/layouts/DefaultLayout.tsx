import React from "react";
import Container from "@mui/material/Container";

const DefaultLayout: React.FC = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.children}
    </Container>
  );
};

export default DefaultLayout;
