import { styled } from 'stitches.config';

const Container = styled('div', {
  width: '100%',
  height: '100%',

  padding: 16,

  background: 'linear-gradient(to right, #0575e6, #021b79)',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export function Background({ ...props }) {
  return <Container {...props} />;
}
