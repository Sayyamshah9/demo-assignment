"use client";
import ServicesCard from "@/Components/landing/ServicesCard";
import { CONSTANTS } from "@/Utilities/constants";
import { content } from "@/Utilities/content";
import { Box, Container } from "@mui/material";
import React, { useState } from "react";

const Services = () => {
  const [activeChip, setActiveChip] = useState("s1");
  return (
    <>
      <Container>
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
        <ServicesCard activeChip={activeChip} />
      </Container>
    </>
  );
};

export default Services;
