interface TextBoxProps extends HTMLDivElement {
  content: string;
  border?: string;
}
export const TextBox = ({ content, border, ...rest }: TextBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: "#8000808c",
        color: "black",
        textAlign: "center",
        border,
      }}
      {...rest}
    >
      {content}
    </div>
  );
};
