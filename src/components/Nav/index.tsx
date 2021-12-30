import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import Link from "next/link";

const Logo = styled.h1`
  font-size: 1em;
  font-weight: bolder;
  color: #fff;
  transition: all 0.1s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  li {
    cursor: pointer;
    position: relative;

    padding: 8px;

    &:before {
      content: "";
      position: absolute;
      background: #c32319;
      height: 2px;
      width: 0%;

      bottom: 0;
      left: 50%;

      transition: all 0.2s;
    }

    &:hover {
      &:before {
        width: 100%;
        left: 0;
      }
    }
  }
`;

const Nav: React.FC = (props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        margin: "48px 0px",
      }}
    >
      <Link passHref href="/">
        <Logo>Alan Siqueira</Logo>
      </Link>
      <LinkList>
        <Link passHref href="/">
          <li>Home</li>
        </Link>
        <Link passHref href="/blog">
          <li>Blog</li>
        </Link>
        {/* <Link passHref href="/goodies">
          <li>Goodies</li>
        </Link> */}
      </LinkList>
    </Container>
  );
};

export default Nav;
