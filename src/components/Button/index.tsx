import { ComponentProps } from '@stitches/react';
import { styled } from 'stitches.config'

import { ScaleLoader } from 'react-spinners';

const Wrapper = styled('button', {
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

  transition: '$Default',

  svg: {
    transition: '$Default',
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
    },

    isActive: {
      true: {
        color: '$Black',
        background: '$White',

        svg: {
          fill: '$Black',
        },
      }
    }
  }
});

type Props = {
  isLoading?: boolean;
} & ComponentProps<typeof Wrapper>;

export function Button({ children, isLoading, ...props }: Props) {
  return (
    <Wrapper {...props}>
      {isLoading && <ScaleLoader color="#ffffff" height={20} />}

      {children}
    </Wrapper>
  );
}
