"use client";
import { Box, Button, Container, Grid } from "@mui/material";
import style from "./page.module.css";
import { content } from "@/Utilities/content";
import Description from "@/Components/landing/Description";
import Testimonials from "@/Components/landing/Testimonials";
import GetQuote from "@/Components/landing/GetQuote";
// import { Container } from "@mui/material";

function Home() {
  return (
    <>
      <Box className={style.imgStyling}>
        <Container>
          <Grid container>
            <Grid item md={6} xs={12} sx={{ paddingTop: "100px" }}>
              <Box
                sx={{
                  background: "rgba(256, 256, 256, 0.18)",
                  backdropFilter: "blur(4.5px)",
                  borderRadius: "18px",
                  padding: "30px",
                }}
              >
                {content.landing.map(({ text, type, color }, index) => {
                  return (
                    <Box
                      as={type}
                      key={index + 1}
                      sx={{ marginBottom: "1rem", color: { color } }}
                    >
                      {text}
                    </Box>
                  );
                })}
                <Button variant="contained">Get Your Quote</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Description />
      </Box>
      <Box>
        <Testimonials />
      </Box>
      <Box>
        <GetQuote />
      </Box>
    </>
  );
}

export default Home;
