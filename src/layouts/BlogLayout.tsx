import { Container } from "@mui/material";
import Head from "next/head";

const BlogLayout: React.FC = (props) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        p: {
          color: "grayText",
        },
      }}
    >
      {props.children}
    </Container>
  );
};

export default BlogLayout;
