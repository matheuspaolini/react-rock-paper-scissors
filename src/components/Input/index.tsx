import { ComponentProps } from '@stitches/react';
import { styled } from 'stitches.config'

const Wrapper = styled('input', {
  background: 'transparent',

  width: 'fit-content',

  padding: '14px 32px',

  color: '$White',
  fontSize: 20,
  fontWeight: '$SemiBold',

  border: '3px solid $White',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,

  svg: {
    fill: '$White',
  },

  '&:hover': {
    color: '$Black',
    background: '$White',

    svg: {
      fill: '$Black',
    },
  },

  '&:disabled': {
    opacity: 0.25,
    cursor: 'not-allowed',

    background: 'transparent',
    color: '$White',

    svg: {
      fill: '$White',
    },
  },

  variants: {
    isMaxWidth: {
      true: {
        width: '100%',
      }
    }
  }
});

type Props = {} & ComponentProps<typeof Wrapper>;

export function Input({ ...props }: Props) {
  return (
    <Wrapper {...props} />
  );
}
