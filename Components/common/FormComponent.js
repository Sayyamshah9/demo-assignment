import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import CustomCard from "./Card";
import Image from "next/image";
import { content } from "@/Utilities/content";

const FormComponent = () => {
  const resources = content.resources;
  return (
    <>
      <Container>
        <Box className="form">
          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "9px",
              padding: "3rem",
              backgroundColor: "#fff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <Grid container spacing={5}>
              <Grid item md={6} xs={12}>
                <Box>
                  <h2 style={{ color: "#1F284F" }}>Get Call Back</h2>
                  <Divider
                    sx={{ borderBottom: "1px solid #c4c4c4", marginY: "1rem" }}
                  />
                  <p style={{ fontSize: "14px" }}>
                    Our Wipro support engineers are highly skilled and
                    experienced, Open-AudIT.
                  </p>
                </Box>
                <Box
                  className="formDiv"
                  marginY={"2rem"}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Grid container>
                    <Grid item md={6} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    id="outlined-basic"
                    label="Mobile Number"
                    type="number"
                    variant="outlined"
                    sx={{ marginY: "1rem" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Message"
                    variant="outlined"
                  />
                  <Button variant="contained" style={{ marginTop: "1rem" }}>
                    Submit
                  </Button>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box>
                  <h3>Resource Hub</h3>
                </Box>
                <Box marginTop="2rem">
                  {resources.map((data) => {
                    return (
                      <>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          marginTop="2rem"
                        >
                          <Image
                            src={"/tick.png"}
                            width={18}
                            height={18}
                            style={{ marginRight: "1rem" }}
                          />
                          <p style={{ fontSize: "14px" }}>{data}</p>
                        </Box>
                      </>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default FormComponent;
