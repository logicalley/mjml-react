import React from "react";
import { renderTo } from "./mjml-rendering-context";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlSocial = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlSocialProps & PaddingProps & ClassNameProps
>) => {
  return renderTo({
    mjml: React.createElement("mj-social", handleMjmlProps(rest), children),
    textHtml: (
      <>
        {children}
        <br />
      </>
    ),
  });
};

export interface MjmlSocialProps {
  borderRadius?: string | number | undefined;
  fontFamily?: string | undefined;
  fontSize?: string | number | undefined;
  iconSize?: string | undefined;
  iconHeight?: string | undefined;
  lineHeight?: string | number | undefined;
  mode?: "vertical" | "horizontal" | undefined;
  textDecoration?: string | undefined;
  align?: string | undefined;
  color?: React.CSSProperties["color"] | undefined;
  innerPadding?: string | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}
