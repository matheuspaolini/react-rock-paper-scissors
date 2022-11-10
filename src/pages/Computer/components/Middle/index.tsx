import { useCallback, useState } from 'react';

import { chooseRandomMove, Moves, MoveIconsMap, Messages, NumericMoves } from 'pages/Computer/utils';

import { toast } from 'react-toastify';

import { Button } from 'components/Button';
import { Title } from 'components/Title';
import { Stack } from 'components/Stack';

import { FaPlay } from 'react-icons/fa';
import { styled } from 'stitches.config';

import { useReturnToStartPage } from 'hooks/useReturnToStartPage';

const Paragraph = styled('p', {
  fontSize: 20,
  color: 'white',
});

const Legend = styled('small', {
  color: 'white',
});

type Props = {
  playerMove: Moves | null;
  setPlayerMove: React.Dispatch<React.SetStateAction<Moves | null>>;

  computerMove: Moves | null;
  setComputerMove: React.Dispatch<React.SetStateAction<Moves | null>>;
}

export function Middle({ playerMove, setPlayerMove, computerMove, setComputerMove }: Props) {
  const { returnToStartPage } = useReturnToStartPage();

  const [isComputerPlaying, setIsComputerPlaying] = useState(false);

  // #region Player Move Controls

  const isRock = playerMove === Moves.Rock;
  const isPaper = playerMove === Moves.Paper;
  const isScissors = playerMove === Moves.Scissors;

  const onSetRock = () => setPlayerMove(Moves.Rock);
  const onSetPaper = () => setPlayerMove(Moves.Paper);
  const onSetScissors = () => setPlayerMove(Moves.Scissors);

  // #endregion

  const compareHands = useCallback(() => {
    const computerMove = chooseRandomMove();

    setComputerMove(computerMove);

    if (playerMove === computerMove) {
      return toast.info(Messages.Draw);
    }

    if (playerMove === Moves.Rock) {
      if (computerMove === Moves.Paper)
        return toast.error(Messages.ComputerWon);

      return toast.success(Messages.PlayerWon);
    }

    if (playerMove === Moves.Paper) {
      if (computerMove === Moves.Scissors)
        return toast.error(Messages.ComputerWon);

      return toast.success(Messages.PlayerWon);
    }

    if (playerMove === Moves.Scissors) {
      if (computerMove === Moves.Rock)
        return toast.error(Messages.ComputerWon);

      return toast.success(Messages.PlayerWon);
    }
  }, [playerMove]);

  const onPlay = useCallback(() => {
    setComputerMove(null);
    setIsComputerPlaying(true);

    setTimeout(() => {
      compareHands();

      setIsComputerPlaying(false);
    }, 3000);
  }, [compareHands]);

  const isPlayButtonDisabled = !playerMove || isComputerPlaying;

  return (
    <Stack flexDirection="column" alignItems="center" isMaxWidth>
      <Title>Player Vs. Computer</Title>

      <br />

      <Paragraph>Your Move.</Paragraph>

      <Stack isMaxWidth>
        <Stack flexDirection="column" alignItems="center" isMaxWidth>
          <Button disabled={isComputerPlaying} isActive={isRock} isMaxWidth onClick={onSetRock}>
            <MoveIconsMap.Rock />
          </Button>

          <Legend>{Moves.Rock}</Legend>
        </Stack>

        <Stack flexDirection="column" alignItems="center" isMaxWidth>
          <Button disabled={isComputerPlaying} isActive={isPaper} isMaxWidth onClick={onSetPaper}>
            <MoveIconsMap.Paper />
          </Button>

          <Legend>{Moves.Paper}</Legend>
        </Stack>

        <Stack flexDirection="column" alignItems="center" isMaxWidth>
          <Button disabled={isComputerPlaying} isActive={isScissors} isMaxWidth onClick={onSetScissors}>
            <MoveIconsMap.Scissors />
          </Button>

          <Legend>{Moves.Scissors}</Legend>
        </Stack>
      </Stack>

      <br />

      <Button isMaxWidth onClick={onPlay} disabled={isPlayButtonDisabled} isLoading={isComputerPlaying}>
        {isComputerPlaying && 'Computer is playing...'}
        {!isComputerPlaying && <> <FaPlay /> Play </>}
      </Button>

      <Button disabled={isComputerPlaying} isMaxWidth onClick={returnToStartPage}>Back</Button>
    </Stack>
  );
}
