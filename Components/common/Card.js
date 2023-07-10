import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const CustomCard = (props) => {
  const {
    cardWidth,
    cardHeight,
    imgSrc,
    imgWidth,
    imgHeight,
    cardContent,
    imgAltText,
    rootStyling,
  } = props;
  return (
    <>
      <Box sx={rootStyling}>
        <Box
          display={"block"}
          width={cardWidth}
          height={cardHeight}
          sx={{
            backgroundColor: "#fff",
            borderRadius: "9px",
            padding: "1rem",
            backgroundColor: "#fff",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
        >
          <Box>
            <Image
              src={`/${imgSrc}`}
              width={imgWidth}
              height={imgHeight}
              alt={imgAltText}
            />
          </Box>
          <Box marginTop={"0.7rem"} sx={{ fontSize: "14px" }}>
            {cardContent}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CustomCard;
