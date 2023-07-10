// import { Box, Container } from "@mui/material";
import React from "react";
import { content } from "@/Utilities/content";
import Link from "next/link";
import Image from "next/image";
import { Box, Container } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box className="logo">
            <Image src="/wipro.png" width={100} height={100} alt="logo" />
          </Box>
          <Box>
            <ul style={{ display: "flex" }}>
              {content.navItem.map(({ title, redirectTo }, index) => {
                return (
                  <li
                    key={index + 1}
                    style={{
                      marginRight: "1rem",
                      color: "#000",
                      listStyleType: "none",
                    }}
                  >
                    {" "}
                    <Link href={redirectTo}> {title} </Link>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
