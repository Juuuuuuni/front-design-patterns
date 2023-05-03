import { Theme } from '~/types/theme';
import { TextBox } from '~/components/ProviderPattern/TextBox';
import { Box } from '~/components/ProviderPattern/Box';

import { ThemeContext } from '~/components/ProviderPattern/withProvider/context/ThemeContext';

interface FirstChildrenProps {
  theme?: Theme;
}

export const ThirdChildren = (props: FirstChildrenProps) => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
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
              content={`Context: ${JSON.stringify(value)}`}
              border={value.palette.border}
            />
          </Box>
          <Box title="Third Child" background="green">
            <TextBox content={`Props: ${JSON.stringify(props)}`} />
          </Box>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
