import { Theme } from "../../types/theme";
import { TextBox } from "../TextBox";
import { Box } from "../Box";
import { SecondChildren } from "./SecondChildren";

interface FirstChildrenProps {
  theme?: Theme;
}
export const FirstChildren = (props: FirstChildrenProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: 10,
        height: "650px",
      }}
    >
      <Box title="First Child" background="orange">
        <TextBox content={`Props: ${JSON.stringify(props)}`} />
        <SecondChildren />
      </Box>
      <Box title="First Child" background="orange">
        <TextBox content={`Props: ${JSON.stringify(props)}`} />
        <SecondChildren />
      </Box>
    </div>

  );
};
