import { Box, Container, Pagination } from "@mui/material";
import Image from "next/image";
import React from "react";
import Card from "../common/Card";
import CustomCard from "../common/Card";
import { content } from "@/Utilities/content";

const Testimonials = () => {
  return (
    <>
      <Container
        sx={{
          paddingY: "5rem",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Box maxWidth={"200px"} margin={"2rem auto"}>
          <Box>
            <Image
              src={"/Quote_Mark.png"}
              width={120}
              height={100}
              alt="Quote Makrk"
            />
          </Box>
          <Box>
            <h1>Stories From Cutomers</h1>
            <p>Get Inspired by These Stories</p>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            marginRight={{ md: "2rem" }}
            marginBottom={"2rem"}
            display={{ sm: "visible" }}
          >
            <CustomCard
              cardHeight={"fit-content"}
              cardWidth={"250px"}
              imgSrc={"Hubspot_logo.png"}
              imgWidth={100}
              imgHeight={28}
              cardContent={content.testimonials.hubSpot}
              imgAltText={"cardIcon"}
            />
          </Box>
          <Box>
            <Box>
              <CustomCard
                cardHeight={"fit-content"}
                cardWidth={"250px"}
                imgSrc={"BookMyShowLogo.png"}
                imgWidth={100}
                imgHeight={28}
                rootStyling={{ marginBottom: "2rem" }}
                cardContent={content.testimonials.airBnb}
                imgAltText={"cardIcon"}
              />
            </Box>
            <Box>
              <CustomCard
                cardHeight={"fit-content"}
                cardWidth={"250px"}
                imgSrc={"Airbnb_Logo.png"}
                imgWidth={100}
                imgHeight={28}
                cardContent={content.testimonials.bookMyShow}
                imgAltText={"cardIcon"}
              />
            </Box>
          </Box>
        </Box>
        <Box margin={"2rem auto"}>
          <Pagination count={3} />
        </Box>
      </Container>
    </>
  );
};

export default Testimonials;
