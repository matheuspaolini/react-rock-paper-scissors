import { PageRoutes } from 'components/RoutesEntry/routes';
import { Button } from 'components/Button';
import { Stack } from 'components/Stack';
import { Title } from 'components/Title';

import { IoIosSave } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { IoSettingsSharp } from 'react-icons/io5';
import { useReturnToStartPage } from 'hooks/useReturnToStartPage';

export function Settings() {
  const { returnToStartPage } = useReturnToStartPage();

  return (
    <>
      <Stack flexDirection="column" alignItems="center">
        <Title>
          <IoSettingsSharp /> Settings
        </Title>

        <Stack isMaxWidth>
          <input type="text" placeholder="Enter your name" />

          <Button>
            <IoIosSave /> Save
          </Button>
        </Stack>

        <Button onClick={returnToStartPage}>Back</Button>
      </Stack>
    </>
  );
}
