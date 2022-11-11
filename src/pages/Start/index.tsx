import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { Stack } from 'components/Stack';
import { PageRoutes } from 'components/RoutesEntry/routes';
import { Title } from 'components/Title';

import { RiComputerFill } from 'react-icons/ri';
import { IoMdPerson } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';
import { keyframes, styled } from 'stitches.config';

const workInProgressAnimation = keyframes({
  '0%': { transform: 'scale(1)', opacity: 0.5 },
  '50%': { transform: 'scale(1.15)', opacity: 1 },
  '100%': { transform: 'scale(1)', opacity: 0.5 },
});

const WorkInProgress = styled('small', {
  color: 'white',
  opacity: 0.5,
  letterSpacing: 2,

  animation: `${workInProgressAnimation} 3s ease infinite`
});

export function Start() {
  const navigate = useNavigate();

  const goToSettingsPage = () => navigate({ pathname: PageRoutes.Settings });
  const goToVersusComputerPage = () => navigate({ pathname: PageRoutes.VersusComputer });
  const goToVersusPlayerPage = () => navigate({ pathname: PageRoutes.VersusPlayer });

  return (
    <Stack flexDirection="column" alignItems="center">
      <Title css={{ textAlign: 'center' }}>Rock, Paper and Scissors</Title>

      <br />

      <Button isMaxWidth onClick={goToVersusComputerPage}>
        <RiComputerFill />
        Player Vs. Computer
      </Button>

      <Button isMaxWidth onClick={goToVersusPlayerPage}>
        <IoMdPerson />
        Player Vs. Player
      </Button>

      <Button isMaxWidth onClick={goToSettingsPage}>
        <IoSettingsSharp />
        Settings
      </Button>

      <WorkInProgress>Work in progress...</WorkInProgress>
    </Stack>
  );
}
