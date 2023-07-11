import { Box, Divider } from "@mui/material";
import React from "react";

const CustomStepperComponent = (props) => {
  const { stepperData } = props;
  return (
    <>
      <Box display={"flex"} alignItems={"center"}>
        {stepperData.map(({ title, description }, index) => {
          return (
            <>
              <Box display={"flex"} alignItems={"center"}>
                {/* <Box
                  sx={{
                    width: "30px",
                    height: "30px",
                    border: "1.5px solid #000",
                    borderRadius: "50%",
                  }}
                ></Box> */}
                <Box sx={{ fontSize: "14px", color: "#1F284F" }} as="h4">
                  {title}
                </Box>
              </Box>
              {index === stepperData.length - 1 ? null : (
                <Divider
                  orientation="horizontal"
                  sx={{
                    width: "5rem",
                    borderBottom: "1px solid #c4c4c4",
                    marginX: "0.5rem",
                  }}
                />
              )}
            </>
          );
        })}
      </Box>
    </>
  );
};

export default CustomStepperComponent;
