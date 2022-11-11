import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { useReturnToStartPage } from 'hooks/useReturnToStartPage';
import { styled } from 'stitches.config';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1000,

});

export function VersusPlayer() {
  const { returnToStartPage } = useReturnToStartPage();

  return (
    <Container>
      <Title>Player Vs. Player</Title>
      <Button isMaxWidth onClick={returnToStartPage}>Back</Button>
    </Container>
  );
}