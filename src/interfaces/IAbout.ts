import React from 'react';

type Anchor = 'right';
type ToggleDrawer = (
  anchor: Anchor,
  open: boolean,
) => (
  event: React.KeyboardEvent | React.MouseEvent,
) => void;

export interface IAbout {
  activeCard: number;
  setActiveCard: React.Dispatch<
    React.SetStateAction<number>
  >;
  toggleDrawer: ToggleDrawer;
}
