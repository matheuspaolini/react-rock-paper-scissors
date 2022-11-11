import { Routes, Route } from 'react-router-dom'

import { Start } from 'pages/Start';
import { Settings } from 'pages/Settings';
import { VersusComputer } from 'pages/VersusComputer';
import { VersusPlayer } from 'pages/VersusPlayer';

import { PageRoutes } from './routes';

export function RoutesEntry() {
  return (
    <Routes>
      <Route path={PageRoutes.Start} element={<Start />} />
      <Route path={PageRoutes.Settings} element={<Settings />} />
      <Route path={PageRoutes.VersusComputer} element={<VersusComputer />} />
      <Route path={PageRoutes.VersusPlayer} element={<VersusPlayer />} />
    </Routes>
  );
}