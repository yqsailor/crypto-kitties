import React from "react";
import { Loader } from "../Loader/Loader";
import { Box } from "@material-ui/core";

interface LoaderBoxProps {}

export const LoaderBox = ({}: LoaderBoxProps) => {
  return (
    <Box p={7} display="flex" alignItems="center" justifyContent="center">
      <Loader size={70} />
    </Box>
  );
};
