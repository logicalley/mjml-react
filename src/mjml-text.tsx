import React from "react";
import { renderMjml } from "./mjml-rendering-context";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlText = ({
  children,
  ...rest
}: React.PropsWithChildren<MjmlTextProps & PaddingProps & ClassNameProps>) => {
  return renderMjml({
    html: React.createElement("mj-text", handleMjmlProps(rest), children),
    text: <div>{children}</div>,
  });
};

// mj-text
export interface MjmlTextProps {
  color?: React.CSSProperties["color"] | undefined;
  fontFamily?: string | undefined;
  fontSize?: string | number | undefined;
  fontStyle?: string | undefined;
  fontWeight?: number | undefined;
  lineHeight?: string | undefined;
  letterSpacing?: string | undefined;
  height?: string | number | undefined;
  textDecoration?: string | undefined;
  textTransform?: string | undefined;
  align?: string | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}
