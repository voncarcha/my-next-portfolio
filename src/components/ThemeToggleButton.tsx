import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ThemeToggleButton: React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'orange')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    >
      ThemeToggleButton
    </IconButton>
  );
};

export default ThemeToggleButton;
