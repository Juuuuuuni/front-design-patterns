import { Theme } from '~/types/theme';
import { TextBox } from '~/components/ProviderPattern/TextBox';
import { Box } from '~/components/ProviderPattern/Box';
import { ThirdChildren } from '~/components/ProviderPattern/withoutProvider/ThirdChildren';

interface FirstChildrenProps {
  theme?: Theme;
}

export const SecondChildren = (props: FirstChildrenProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: 10,
        height: '500px',
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
