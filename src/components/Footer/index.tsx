import { Container, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Container
      sx={{
        minWidth: "100% !important",
        padding: "16px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
        }}
      >
        Alan Siqueira - 2021
      </Typography>
    </Container>
  );
};

export default Footer;
