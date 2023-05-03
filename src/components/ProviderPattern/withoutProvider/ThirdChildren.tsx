import { Theme } from '~/types/theme';
import { TextBox } from '~/components/ProviderPattern/TextBox';
import { Box } from '~/components/ProviderPattern/Box';

interface FirstChildrenProps {
  theme?: Theme;
}

export const ThirdChildren = (props: FirstChildrenProps) => {
  const { theme } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        gap: 10,
        height: '400px',
      }}
    >
      <Box title="Third Child" background="green">
        <TextBox
          content={`Props: ${JSON.stringify(props)}`}
          border={theme?.palette.border}
        />
      </Box>
      <Box title="Third Child" background="green">
        <TextBox content={`Props: ${JSON.stringify(props)}`} />
      </Box>
    </div>
  );
};
