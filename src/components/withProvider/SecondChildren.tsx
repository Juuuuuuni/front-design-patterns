import { Theme } from "../../types/theme";
import { TextBox } from "../TextBox";
import { Box } from "../Box";
import { ThirdChildren } from "./ThirdChildren";

interface FirstChildrenProps {
  theme?: Theme;
}

export const SecondChildren = (props: FirstChildrenProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: 10,
        height: "500px",
      }}
    >
      <Box title="Second Child" background="yellow">
        <TextBox content={`Props: ${JSON.stringify(props)}`} />
        <ThirdChildren theme={props.theme} />
      </Box>
      <Box title="Second Child" background="yellow">
        <TextBox content={`Props: ${JSON.stringify(props)}`} />
        <ThirdChildren theme={props.theme} />
      </Box>
    </div>
  );
};
