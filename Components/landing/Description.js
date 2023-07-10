import { content } from "@/Utilities/content";
import { Box, Chip, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import ServicesCard from "./ServicesCard";
import { CONSTANTS } from "@/Utilities/constants";

const chipStyling = {
  border: '1px solid #"#1F284F" 50%',
};

const Description = () => {
  const [activeChip, setActiveChip] = useState("s1");
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FAF9F6",
          paddingTop: "5rem",
          minHeight: "450px",
        }}
        padding={"1.5rem"}
      >
        <Container>
          <Box as="span" sx={{ fontSize: "14px", color: "#1F384F" }}>
            Lorem Ipsum
          </Box>
          <Box as="h2" sx={{ color: "#1F284F" }}>
            Network Managment
          </Box>
          <Box
            marginTop={"1.5rem"}
            display={"flex"}
            flexDirection={{ md: "row", xs: "column" }}
            alignItem={"center"}
          >
            {content.descriptionContent.map((item) => {
              return (
                <Box
                  display={"block"}
                  width={"fit-content"}
                  marginBottom={{ xs: "1rem" }}
                  sx={{
                    // border: "1px solid #1F284F",
                    backgroundColor: "#fff",
                    borderRadius: "3px",
                    padding: "0.5rem",
                    ":hover": {
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    },
                  }}
                  marginRight={"1rem"}
                  onClick={() => setActiveChip(item)}
                >
                  {CONSTANTS.SERVICES[item]}
                </Box>
              );
            })}
          </Box>
          <Box marginTop="2rem">
            <ServicesCard activeChip={activeChip} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Description;
