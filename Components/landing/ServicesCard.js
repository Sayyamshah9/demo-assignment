import { CONSTANTS } from "@/Utilities/constants";
import { content } from "@/Utilities/content";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import CustomCard from "../common/Card";

const SelectedChipDataRepresentation = (props) => {
  const { servicesData, cardData, activeChip, showCard = true } = props;
  return (
    <>
      <Box as="h3" marginBottom={"0.7rem"}>
        {CONSTANTS.SERVICES[activeChip]}
      </Box>
      <Box>
        <Box as={"h4"} sx={{ color: "#1F284F" }}>
          {servicesData.subheading}
        </Box>
        <Box>{servicesData.description}</Box>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", xs: "column" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={"2rem"}
        >
          {showCard &&
            cardData.map(({ icon, cardDescription }, index) => {
              return (
                <>
                  <CustomCard
                    cardWidth={"350px"}
                    imgSrc={icon}
                    imgWidth={28}
                    imgHeight={28}
                    cardContent={cardDescription}
                    imgAltText={"cardIcon"}
                    rootStyling={{ marginBottom: { xs: "2rem" } }}
                  />
                </>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

const ServicesCard = (props) => {
  const { activeChip } = props;
  const servicesData = content.services_data[activeChip];
  const cardData = servicesData.cardData;
  return (
    <>
      {activeChip === "s1" && (
        <>
          <SelectedChipDataRepresentation
            servicesData={servicesData}
            cardData={cardData}
            activeChip={activeChip}
          />
        </>
      )}
      {activeChip === "s2" && (
        <>
          <SelectedChipDataRepresentation
            servicesData={servicesData}
            cardData={cardData}
            activeChip={activeChip}
          />
        </>
      )}
      {activeChip === "s3" && (
        <>
          <SelectedChipDataRepresentation
            servicesData={servicesData}
            cardData={cardData}
            activeChip={activeChip}
            showCard={false}
          />
        </>
      )}
    </>
  );
};

export default ServicesCard;
