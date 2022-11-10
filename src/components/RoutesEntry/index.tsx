import { Routes, Route } from 'react-router-dom'

import { Start } from 'pages/Start';
import { Settings } from 'pages/Settings';
import { Computer } from 'pages/Computer';
import { PageRoutes } from './routes';

export function RoutesEntry() {
  return (
    <Routes>
      <Route path={PageRoutes.Start} element={<Start />} />
      <Route path={PageRoutes.Settings} element={<Settings />} />
      <Route path={PageRoutes.Computer} element={<Computer />} />
    </Routes>
  );
}