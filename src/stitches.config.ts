import { createStitches } from '@stitches/react';
import { CSS as StitchesCSS } from '@stitches/react';

export const { css, styled, globalCss, keyframes, config } = createStitches({
  theme: {
    colors: {
      White: '#fff',
      Black: '#000',
    },

    fonts: {
      Roboto: 'Roboto'
    },
    fontWeights: {
      Thin: 100,
      ExtraLight: 200,
      Light: 300,
      Regular: 400,
      Medium: 500,
      SemiBold: 600,
      Bold: 700,
      ExtraBold: 800,
      Black: 900
    },
    transitions: {
      Default: '0.1s ease',
      SlowEase: '0.3s ease'
    },

    borderWidths: {},
    radii: {
      Full: 9999,
    },
    zIndices: {},
    shadows: {}
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`
    }),

    centeredBackgroundImage: (image: string) => ({
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }),

    size: (value: string) => ({
      width: value,
      height: value
    }),

    rounded: (borderRadius: number | string) => ({ borderRadius })
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1280px)',
    '2xl': '(max-width: 1360px)'
  }
});

export const useStitches = globalCss({
  '*': {
    boxSizing: 'border-box',

    padding: 0,
    margin: 0,

    fontFamily: 'Montserrat'
  },

  'html, body, #root': {
    height: '100%'
  },

  body: {
    position: 'relative',
  },

  'a, button': {
    cursor: 'pointer'
  }
});

export type CSS = StitchesCSS<typeof config>;
