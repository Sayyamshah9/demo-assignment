"use client";
import FormComponent from "@/Components/common/FormComponent";
import CustomStepperComponent from "@/Components/common/Stepper";
import { content } from "@/Utilities/content";
import { Box, Button, Container, Grid, Stepper } from "@mui/material";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const staticData = content.contactUs;

  return (
    <>
      <Container>
        <Box
          display={"flex"}
          flexDirection={{ md: "row", sm: "column", xs: "column" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginY={"2rem"}
        >
          <Box className="content" width={{ md: "50%" }}>
            {staticData.map((data) => {
              return (
                <>
                  <Box>
                    <h3 style={{ color: "#1F284F" }}>{data?.heading}</h3>
                  </Box>
                  <Box marginY={"2rem"}>
                    <p style={{ fontSize: "14px" }}>{data?.description}</p>
                  </Box>
                  <Box>
                    <CustomStepperComponent stepperData={data?.steps} />
                  </Box>
                </>
              );
            })}
          </Box>
          <Box
            className="images"
            width={{ md: "50%" }}
            textAlign={"center"}
            marginTop={{ xs: "2rem" }}
          >
            <Box>
              <Image
                src={"/unsplash2.png"}
                width={300}
                height={350}
                sx={{ position: "absolute", top: 0, left: 0 }}
              />
              {/* <Image
                src={"/unsplash1.png"}
                width={250}
                height={300}
                // sx={{ position: "absolute", top: 0, left: 0 }}
              /> */}
            </Box>
          </Box>
        </Box>
        <Box marginY={"5rem"}>
          <FormComponent />
        </Box>
      </Container>
    </>
  );
};

export default Contact;
