import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface ClickableCardProps {
    imageSrc: string;
    alt: string;
    text: string;
    onClick?: () => void;
    isActive: boolean;
    style?: React.CSSProperties;
  }

export const ClickableCard = ({ imageSrc, alt, text, onClick, isActive, style}: ClickableCardProps) => {
  const [hovered, setHovered] = useState(false);

  const shouldShowColor = isActive || hovered;

  return (
    <Box
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ cursor: "pointer", ...style }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mt: 4,
          filter: shouldShowColor ? "none" : "brightness(0.5)",
          transition: "filter 0.3s ease",
        }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            width={100}
            height={100}
            style={{ borderRadius: 8 }}
            loading="lazy"
          />
        ) : (
          <Box sx={{ height: 100, width: 100 }} />
        )}
        <Typography
          variant="body1"
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};
