type Anchor = 'right';
type ToggleDrawer = (
  anchor: Anchor,
  open: boolean,
) => (
  event: React.KeyboardEvent | React.MouseEvent,
) => void;

export interface IAboutList {
  petListState: {
    top: boolean;
    left: boolean;
    bottom: boolean;
    right: boolean;
  };
  toggleDrawer: ToggleDrawer;
}
