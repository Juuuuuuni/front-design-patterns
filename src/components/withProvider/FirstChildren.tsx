import { Theme } from "../../types/theme";
import { TextBox } from "../TextBox";
import { Box } from "../Box";
import { SecondChildren } from "./SecondChildren";
import { ThemeContext } from "./context/ThemeContext";

interface FirstChildrenProps {
  theme?: Theme;
}
export const FirstChildren = (props: FirstChildrenProps) => {
  console.log("wtf");
  return (
    <ThemeContext.Consumer>
      {(value) => (
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
            <SecondChildren theme={props.theme} />
          </Box>
          <Box title="First Child" background="orange">
            <TextBox content={`Props: ${JSON.stringify(props)}`} />
            <SecondChildren theme={props.theme} />
          </Box>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
