import { Box } from "@chakra-ui/react";
import React from "react";

interface IView {
  children: any;
  cond: any;
  rest: any;
}

const View = ({ children, cond, ...rest }: IView) => {
  if (cond) return <Box {...rest}>{children}</Box>;
  else return null;
};

export default View;
