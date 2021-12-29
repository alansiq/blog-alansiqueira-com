import Image from "next/image";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetSinglePostModel } from "../../models/GetSinglePostModel";
import Link from "next/link";
import styled from "@emotion/styled";

const TruncateText = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const PostHighlighted: React.FC<GetSinglePostModel> = ({ frontmatter }) => {
  const tags = frontmatter.tags.split(",");

  return (
    <Stack
      spacing={2}
      sx={{
        borderRadius: "24px",
        padding: "8px",
        transition: "all 0.1s",

        ".highlightpost-img-box": {
          transition: "all 0.1s",
        },
        "&:hover": {
          backgroundColor: "background.paper",
          ".highlightpost-img-box": {
            transform: "scale(1.05) translate(0, -10px)",
          },
        },
      }}
    >
      <Link passHref href={frontmatter.slug}>
        <Box
          className="highlightpost-img-box"
          sx={{
            cursor: "pointer",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Image
            src={frontmatter.coverUrl}
            width={570}
            height={250}
            alt="Blog cover"
          />
        </Box>
      </Link>
      <Stack direction="row" spacing={2}>
        {tags.map((tag: string, index: number) => (
          <Chip label={tag} key={index} />
        ))}
      </Stack>
      <Stack>
        <Link passHref href={frontmatter.slug}>
          <Typography variant="h4" sx={{ cursor: "pointer" }}>
            {frontmatter.title}
          </Typography>
        </Link>
        <Typography variant="caption" color="GrayText">
          {frontmatter.dataPublicado}
        </Typography>
      </Stack>

      <Typography
        variant="body1"
        paragraph
        align="justify"
        sx={{ fontSize: "1.1em" }}
      >
        <TruncateText>{frontmatter.firstParagraph}</TruncateText>
      </Typography>
      <Link passHref href={frontmatter.slug}>
        <Button color="primary">READ MORE</Button>
      </Link>
    </Stack>
  );
};

export default PostHighlighted;
