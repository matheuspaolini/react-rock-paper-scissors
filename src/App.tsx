import { useStitches } from 'stitches.config';

import { RoutesEntry } from 'components/RoutesEntry';
import { Toastify } from 'components/Toastify';
import { Background } from 'components/Background';

export default function App() {
  useStitches();

  return (
    <Background>
      <Toastify />
      <RoutesEntry />
    </Background>
  );
}
