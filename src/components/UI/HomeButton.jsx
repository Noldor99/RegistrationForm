import React from "react";
 
import { Button } from "@mui/material";

export const HomeButton = ({ children, ...props }) => {
 

  return (
    <Button
 
      stylebutton = 'simple'
      variant="contained"
      color = "secondary"
      {...props}
    >
      {children}
    </Button>
  );
};
