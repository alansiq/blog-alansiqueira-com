import Image from "next/image";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GetSinglePostModel } from "../../models/GetSinglePostModel";

const PostHighlighted: React.FC<GetSinglePostModel> = ({ frontmatter }) => {
  const tags = frontmatter.tags.split(",");

  return (
    <Stack spacing={2}>
      <Box
        sx={{
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
      <Stack direction="row" spacing={1}>
        {tags.map((tag: string, index: number) => (
          <Chip label={tag} component="a" href="#" clickable key={index} />
        ))}
      </Stack>
      <Typography variant="h4">{frontmatter.title}</Typography>
      <Typography variant="body1">{frontmatter.firstParagraph}</Typography>
    </Stack>
  );
};

export default PostHighlighted;
