import { ComponentProps } from '@stitches/react';
import { styled } from 'stitches.config';

const StyledTitle = styled('h1', {
  color: 'white',

  display: 'flex',
  alignItems: 'center',
  gap: 12,

  textAlign: 'center',
});

type Props = {} & ComponentProps<typeof StyledTitle>;

export function Title({ ...props }: Props) {
  return (
    <StyledTitle {...props} />
  );
}
