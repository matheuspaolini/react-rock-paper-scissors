import { FaHandRock, FaHandScissors, FaHandPaper } from 'react-icons/fa';
import { generateRandomNumber } from 'utils/generateRandomNumber';

export enum Moves {
  Rock = 'Rock',
  Paper = 'Paper',
  Scissors = 'Scissors',
}

export enum NumericMoves { Rock, Paper, Scissors }

export const MoveIconsMap = {
  [Moves.Rock]: FaHandRock,
  [Moves.Paper]: FaHandPaper,
  [Moves.Scissors]: FaHandScissors,
};

export const moveList = Object.values(Moves);
export const moveListLength = moveList.length;
export const moveListLastIndex = moveListLength - 1;

export function chooseRandomMove() {
  const randomNumber = Math.floor(generateRandomNumber({ maximum: moveListLength, minimum: 0 }));
  const randomMove = moveList[randomNumber];

  return randomMove;
}

export enum Messages {
  PlayerWon = 'You Won!',
  ComputerWon = 'The Computer Won!',
  Draw = 'The Game was a Draw!',
}
