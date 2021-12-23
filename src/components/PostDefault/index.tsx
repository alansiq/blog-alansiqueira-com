import { Typography, Stack, Box, Chip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { GetSinglePostModel } from "../../models/GetSinglePostModel";
import ArrowForward from "@mui/icons-material/ArrowForward";

const PostDefault: React.FC<GetSinglePostModel> = ({ frontmatter, slug }) => {
  const tags = frontmatter.tags.split(",");

  return (
    <Link href={`blog/${slug}`} passHref>
      <Box
        sx={{
          whiteSpace: "nowrap",
          transition: "all 0.2s",
          cursor: "pointer",
          position: "relative",
          borderRadius: "16px",

          "&:hover": {
            padding: "8px",
            backgroundColor: "background.paper",
          },
        }}
      >
        <Stack direction="row" spacing={1}>
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            <Image
              src={frontmatter.coverUrl}
              height={100}
              width={110}
              alt={frontmatter.title}
            />
          </Box>
          <Stack>
            <Typography variant="h5">{frontmatter.title}</Typography>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
              <Stack direction="row" spacing={1}>
                {tags.map((t: string, i: number) => (
                  <Chip size="small" key={i} label={t} />
                ))}
              </Stack>
              <Typography variant="caption" color="GrayText">
                {frontmatter.dataPublicado}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
};

export default PostDefault;
