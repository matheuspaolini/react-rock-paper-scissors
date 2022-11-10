import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { Stack } from 'components/Stack';
import { PageRoutes } from 'components/RoutesEntry/routes';
import { Title } from 'components/Title';

import { RiComputerFill } from 'react-icons/ri';
import { IoMdPerson } from 'react-icons/io';
import { IoSettingsSharp } from 'react-icons/io5';

export function Start() {
  const navigate = useNavigate();

  const goToSettingsPage = () => navigate({ pathname: PageRoutes.Settings });
  const goToComputerPage = () => navigate({ pathname: PageRoutes.Computer });

  return (
    <Stack flexDirection="column" alignItems="center">
      <Title css={{ textAlign: 'center' }}>Rock, Paper and Scissors</Title>

      <br />

      <Button isMaxWidth onClick={goToComputerPage}>
        <RiComputerFill />
        Player Vs. Computer
      </Button>

      <Button isMaxWidth disabled>
        <IoMdPerson />
        Player Vs. Player
      </Button>

      <Button isMaxWidth onClick={goToSettingsPage}>
        <IoSettingsSharp />
        Settings
      </Button>
    </Stack>
  );
}
