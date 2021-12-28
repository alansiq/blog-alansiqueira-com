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
          transition: "all 0.2s",
          cursor: "pointer",
          padding: "4px",
          position: "relative",
          borderRadius: "16px",

          "&:hover": {
            backgroundColor: "background.paper",

            ".postdefault-custombox": {
              transform: "translate(-15px, -15px)",
            },
          },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
          }}
        >
          <Box
            className="postdefault-custombox"
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              height: "100px",
              width: "150px",
              transition: "all 0.1s",
            }}
          >
            <Image
              className="postdefault-image"
              src={frontmatter.coverUrl}
              layout="fill"
              alt={frontmatter.title}
            />
          </Box>
          <Stack>
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  sm: 16,
                  lg: 24,
                },
              }}
            >
              {frontmatter.title}
            </Typography>
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
