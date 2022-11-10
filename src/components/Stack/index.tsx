import { styled } from 'stitches.config';

export const Stack = styled('div', {
  display: 'flex',
  gap: 16,

  variants: {
    flexDirection: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      },
      'column-reverse': {
        flexDirection: 'column-reverse'
      },
      revert: {
        flexDirection: 'revert'
      },
      unset: {
        flexDirection: 'unset'
      },
      initial: {
        flexDirection: 'initial'
      },
      inherit: {
        flexDirection: 'inherit'
      }
    },

    alignItems: {
      center: {
        alignItems: 'center',
      },
      'flex-start': {
        alignItems: 'flex-start',
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      'space-between': {
        justifyContent: 'space-between',
      },
    },

    isMaxWidth: {
      true: {
        width: '100%'
      }
    },
    isMaxHeight: {
      true: {
        height: '100%'
      }
    },
    isMaxSize: {
      true: {
        width: '100%',
        height: '100%'
      }
    },
  }
});
