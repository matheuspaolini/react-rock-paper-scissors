import { useState } from 'react';
import { styled } from 'stitches.config';

import { Stack } from 'components/Stack';

import { RiComputerFill } from 'react-icons/ri';
import { IoMdPerson } from 'react-icons/io';
import { HiQuestionMarkCircle } from 'react-icons/hi';

import { Moves, MoveIconsMap } from './utils';
import { Middle } from './components/Middle';
import { useWindowSize } from 'hooks/useWindowSize';

const Container = styled('div', {
  width: '100%',
  maxWidth: 1000,

  display: 'flex',
  gap: 16,
});

const Wrapper = styled('div', {
  padding: 16,

  color: 'white',

  width: '100%',
  maxWidth: 200,

  borderRadius: 12,
  border: '3px solid $White',
});

const Avatar = styled('div', {
  aspectRatio: 1,

  display: 'grid',
  placeItems: 'center',

  padding: 16,
  borderRadius: 999,
  border: '3px solid $White',

  color: 'white',
});

const Username = styled('p', {
  fontSize: 24,
  fontWeight: '$SemiBold',
  color: 'white',
});

const Paragraph = styled('p', {
  fontSize: 20,
  color: 'white',
});

export type PlayerMoves = Moves.Rock | Moves.Paper | Moves.Scissors | null;
export type ComputerMoves = PlayerMoves;

export function VersusComputer() {
  const { width } = useWindowSize();

  const isWidthLessThan768 = !!width && width < 768;

  const [playerMove, setPlayerMove] = useState(null as PlayerMoves);
  const [computerMove, setComputerMove] = useState(null as ComputerMoves);

  const PlayerMoveSymbol = !!playerMove && MoveIconsMap[playerMove];
  const ComputerMoveSymbol = !!computerMove && MoveIconsMap[computerMove];

  console.log('playerMove', playerMove);
  console.log('computerMove', computerMove);

  return (
    <Container>
      {!isWidthLessThan768 && (
        <Wrapper>
          <Stack flexDirection="column" alignItems="center" isMaxSize>
            <Avatar>
              <IoMdPerson size={32} />
            </Avatar>

            <Username>Player</Username>
            <Paragraph>Score: 0</Paragraph>

            {PlayerMoveSymbol ? <PlayerMoveSymbol size={32} /> : <HiQuestionMarkCircle size={32} />}
          </Stack>
        </Wrapper>
      )}

      <Middle
        playerMove={playerMove}
        setPlayerMove={setPlayerMove}
        computerMove={computerMove}
        setComputerMove={setComputerMove}
      />

      {!isWidthLessThan768 && (
        <Wrapper>
          <Stack flexDirection="column" alignItems="center" isMaxSize>
            <Avatar>
              <RiComputerFill size={32} />
            </Avatar>

            <Username>Computer</Username>
            <Paragraph>Score: 0</Paragraph>

            {ComputerMoveSymbol ? <ComputerMoveSymbol size={32} /> : <HiQuestionMarkCircle size={32} />}
          </Stack>
        </Wrapper>
      )}
    </Container>
  );
}
