import { content } from "@/Utilities/content";
import { Box, Container, Divider, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const list = content.footer;
  return (
    <>
      <Box sx={{ backgroundColor: "#FAF9F6", paddingY: "2rem" }}>
        <Container>
          <Grid container>
            <Grid item md={4} xs={12}>
              <Box>
                <Image
                  src={"/wipro.png"}
                  width={100}
                  height={100}
                  alt={"Wipro Logo"}
                />
              </Box>
              <Box>
                <Box as="span" sx={{ fontSize: "14px" }}>
                  Mauris non odio eleifend, hendrerit est non, luctus diam.
                  Vestibulum bibendum malesuada justo quis iaculis. luctus diam.
                  Vestibulum bibendum malesuada justo quis iaculis.
                  <Divider
                    orientation="horizotal"
                    sx={{ borderBottom: "1px solid #c4c4c4", marginY: "1rem" }}
                  />
                  <Box>Wipro 2023. All Rights Reserved</Box>
                  <Box sx={{ color: "#1F284F" }}>
                    <Link href={"/"}>Terms and Privacy</Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2} xs={12}></Grid>
            {list.map((item) => {
              return (
                <>
                  <Grid
                    item
                    md={2}
                    xs={12}
                    sm={6}
                    sx={{ marginY: "1rem" }}
                    textAlign={{ xs: "center", sm: "start", md: "start" }}
                  >
                    {item?.heading && <Box as="h4">{item?.heading}</Box>}
                    {item.list &&
                      item.list.map((listItem) => {
                        return <Box sx={{ fontSize: "14px" }}>{listItem}</Box>;
                      })}
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
