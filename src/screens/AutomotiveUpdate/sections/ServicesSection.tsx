import React from "react";
import { ClickableCard } from "@/components/ui/clickableCard";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";

export const ServicesSection = (): JSX.Element => {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [daynamicLoad, setDaynamicLoad] = useState(false);

  const isXs = useMediaQuery("(max-width:599px)");
  const isSm = useMediaQuery("(min-width:600px) and (max-width:899px)");
  const isMd = useMediaQuery("(min-width:900px) and (max-width:1199px)");
  const isLg = useMediaQuery("(min-width:1200px)");

  const getWidth = () => {
    if (isLg) return "20vw";
    if (isMd) return "26vw";
    if (isSm) return "40vw";
    if (isXs) return "50vw";
    return "100%";
  };

  useEffect(() => {
    if (hovered) {
      setDaynamicLoad(true)
    }
  }, [hovered]);

  const [currentVideo, setCurrentVideo] = useState([
    {
      src: "/img/Passenger Alpha - Trim.mp4",
      title: "Passenger Alpha - Trim",
      description: "A trimmed version of the Passenger Alpha video.",
    },
    {
      src: "/vid/Commercial Alpha.mp4",
      title: "Commercial Alpha",
      description: "A commercial video showcasing the Alpha model.",
    },
  ]);

  const cabinData = [
    {
      imageSrc: "/img/complete.png",
      alt: "Complete Body",
      text: "Complete Body",
      video: "/img/Passenger Alpha - Trim.mp4",
    },
    {
      imageSrc: "/img/front.png",
      alt: "Front",
      text: "Front",
      video: "/vid/Front.mp4",
    },
    {
      imageSrc: "",
      alt: "Cabin",
      text: "Cabin",
      video: "/vid/Cabin.mp4",
    },
    {
      imageSrc: "/img/trunk.png",
      alt: "Trunk",
      text: "Trunk",
      video: "/vid/Trunk.mp4",
    },
    {
      imageSrc: "/img/exterior.png",
      alt: "Exterior",
      text: "Exterior",
      video: "/vid/Exterior.mp4",
    },
  ];

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      const screenWidth = window.innerWidth;
      const clickX = e.clientX;
      console.log("click left", clickX);
      const target = e.target as HTMLElement;
      if (target.closest(".ignore-click") || !target.closest(".clicked-area"))
        return;

      if (clickX < screenWidth / 2) {
        // Left side clicked
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      } else {
        // Right side clicked
        console.log("click left");
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((e) => {
        console.error("Video play failed:", e);
      });
    }
  }, [currentVideo]); // Trigger when the first video's src changes

  const handleClickParts = (newSrc: string) => {
    setCurrentVideo((prevVideos) => {
      const updatedVideos = [...prevVideos]; // create a shallow copy
      updatedVideos[0] = {
        ...updatedVideos[0], // keep other properties like title, description
        src: newSrc, // update only src
      };
      return updatedVideos;
    });
  };

  return (
    <Box
      className="clicked-area"
      component="section"
      sx={{
        bgcolor: "black",
        width: "100%",
        position: "relative",
        minHeight: "100vh",
        height: "max-content",
        padding: "100px 0",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            maxWidth: "lg",
            mx: "auto",
            transform: !hovered ? "translateY(200%)" : "translateY(-50px)",
            transition: "transform 0.5s ease-out",
            position: "relative",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          <Box component="span" sx={{ fontWeight: 300, color: "white" }}>
            Evolving the drive with{" "}
          </Box>
          <Box component="span" sx={{ fontWeight: 600, color: "white" }}>
            360-degree
          </Box>
          <Box component="span" sx={{ fontWeight: 300, color: "white" }}>
            {" "}
            nonwoven solutions
          </Box>
        </Typography>

        {daynamicLoad? <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "90vw",
            position: "relative",
            transform: !hovered ? "translateY(300px)" : "translateY(0)",
            opacity: !hovered ? 0 : 1,
            transition: "transform 0.7s ease-out, opacity 0.5s ease-out",
          }}
        >
          {/* scroll bar */}
          <Box
            sx={{
              width: "2px",
              margin: "70px 0",
              height: "30vh",
              backgroundColor: "gray",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "2px",
                height: currentIndex === 0 ? "100%" : "50%",
                backgroundColor: "white",
                position: "absolute",
                top: 0,
                left: "0%",
                transition: "height 0.5s ease-out",
                // overflow: 'visible',
              }}
            ></Box>
          </Box>

          {/* video section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "center",
              width: "100%",
              padding: 2,
              position: "absolute",
              zIndex: 0,
              transform:
              !hovered? '"translateY(200%)"' : currentIndex === 0 ? "translateY(-50%)" : "translateY(0)",
              transition: "transform 0.5s ease-out",
              left: "10%",
            }}
          >
            {/* //video section */}
            {currentVideo.map((video, index) => (
              <Box
              key={index}
                sx={{
                  display: "flex",
                  height: "auto",
                  overflow: "hidden",
                  opacity: currentIndex === index ? 0 : 1,
                  transition: "opacity 0.5s ease-out",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "max-content",
                    gap: 10,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: 50,
                      maxWidth: 500,
                      paddingRight: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="white"
                      sx={{
                        maxWidth: 500,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        gap: 1,
                        fontSize: { xs: "0.6rem", sm: "0.7rem", md: "1rem", lg: "1.3rem" },
                      }}
                    >
                      <Box component="span" fontWeight="bold">
                        {video.title}
                        <br />
                      </Box>
                      <Box
                        component="span"
                        fontWeight="normal"
                        sx={{ opacity: 0.8 }}
                      >
                        {video.description}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                 {/* Video Box */}
          <Box sx={{ minHeight: { xs: "50vw", sm: "40vw", md: "26vw", lg: "20vw" }, }}>
            <video
              ref={index === 0 ? videoRef : null}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                maxHeight: !hovered
                  ? "5vw"
                  : index === 1 && currentIndex === 0
                  ? getWidth()
                  : index === 0 && currentIndex === 1
                  ? getWidth()
                  : "5vw",
                maxWidth: "100%",
                transition: "max-height 0.5s ease-out, max-width 0.5s ease-out",
              }}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
              </Box>
            ))}
          </Box>
        </Box> : <Box sx={{
          height: "30vh",
        }}></Box>}

        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.5)",
            mt: 5,
            zIndex: 12,
            fontSize: { xs: "0.5rem", sm: "0.6rem", md: "0.7rem", lg: "1rem" },
          }}
        >
          Click anywhere for next slide <br />
          (Only written for prototype)
        </Typography>
        <Box
          className="ignore-click"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "end",
            alignItems: "center",
            gap: 4,
            mt: 1,
            width: "90vw",
            zIndex: 12,
          }}
        >
          {cabinData?.map((item, index) => (
            <ClickableCard
              key={index}
              imageSrc={item.imageSrc}
              alt={item.alt}
              text={item.text}
              onClick={() => handleClickParts(item.video)}
              isActive={currentVideo[0].src === item.video}
              style={{
                opacity: !hovered ? 0 : currentIndex === 0 ? 0 : 1,
                transform:
                !hovered ? "translateY(50px)" : currentIndex === 0 ? "translateY(50px)" : "translateY(0)",
                transition:
                  "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
              }}
            />
          ))}
          <Image
            src={"/img/playIcon.png"}
            alt={"Play Icon"}
            width={100}
            height={100}
            style={{ borderRadius: 8, width: "10vh", height: "10vh" }}
            loading="lazy"
          />
        </Box>
      </Container>
    </Box>
  );
};
