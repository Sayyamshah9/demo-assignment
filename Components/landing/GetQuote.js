import { content } from "@/Utilities/content";
import { Box, Button, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const GetQuote = () => {
  return (
    <>
      <Box marginBottom={"5rem"}>
        <Container
          style={{
            backgroundColor: "#1F284F",
            textAlign: "center",
            color: "#fff",
            borderRadius: "27px",
            padding: "30px",
          }}
        >
          <Box>
            <h2>Need Help Making a Decision?</h2>
          </Box>
          <Box
            display={"flex"}
            flexDirection={{ md: "row", xs: "column" }}
            textAlign={"start"}
            marginY={"2rem"}
          >
            {content.getQuote.map(({ text, ic }) => {
              return (
                <Box marginY={"2rem"}>
                  <Box>
                    <Image
                      src={`/${ic}`}
                      width={18}
                      height={18}
                      alt="CheckMark"
                    />
                  </Box>
                  <Box>{text}</Box>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Button
              sx={{
                color: "#fff",
                border: "0.7px solid #fff",
                ":hover": { backgroundColor: "#fff", color: "#000" },
              }}
            >
              Get Your Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default GetQuote;
