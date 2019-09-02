import { SettingDrawerState } from '.';

export interface SettingDrawerChildrenProps {
  state: SettingDrawerState;
  setState: (state: Partial<SettingDrawerState>) => void;
}
