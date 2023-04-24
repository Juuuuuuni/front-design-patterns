import { ReactNode } from "react";

interface BoxProps extends HTMLDivElement {
  background: string;
  title: string;
  width?: string;
}

export const Box = ({ background, title, width, children }: BoxProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "black",
          overflow: "hidden",
        gap: "30px",
        width: width ?? "45%",
        alignItems: "center",
          background,
      }}
    >
      {title}
      {children}
    </div>
  );
};
