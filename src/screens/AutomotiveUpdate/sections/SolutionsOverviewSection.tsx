import { Language } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import { JSX } from "react";
import Icons from "@/components/ui/icons";
import { stylesSmallComponent } from "@/styles/theme/component";

export const SolutionsOverviewSection = (): JSX.Element => {
  return (
    <Box component="section">
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ bgcolor: "background.paper" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 8 } }}>
          <Box sx={{ position: "relative", width: 146, height: 41 }}>
            <Image
              src="/img/logo.png"
              alt="Company logo text"
              width={100}
              height={35}
              style={{
                position: "absolute",
                top: 3,
                left: 46,
              }}
            />
          </Box>

          <Stack direction="row" spacing={2} alignItems="center">
            <Button
              variant="contained"
              sx={{
                ...stylesSmallComponent.buttonStyle,
              }}
            >
              Contact Us
            </Button>

            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton>
                <LinkedInIcon
                  sx={{
                    color: "black",
                  }}
                />
              </IconButton>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Icons url="/img/translate.png" />
                <Typography variant="caption" fontWeight={600}>
                  ENG
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          height: 925,
          bgcolor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h6" color="white">
              Performance in motion
            </Typography>

            <Typography variant="h3" color="white" sx={{ maxWidth: "980vw" }}>
              <Box component="span" fontWeight={600}>
                Soft Trims and NVH Solutions
                <br />
              </Box>
              <Box component="span" fontWeight={400}>
                for seamless rides
              </Box>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
