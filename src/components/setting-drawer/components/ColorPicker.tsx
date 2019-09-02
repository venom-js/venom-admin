/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { Popover, Button } from 'antd';
import { SketchPicker } from 'react-color';

interface Props {
  onChange?: (color: string) => void;
  value?: any;
}
const ColorPicker: React.FC<Props> = props => {
  const content: React.ReactNode = <SketchPicker color={props.value} onChange={props.onChange} on width={250} />;
  return (
    <Popover content={content} title="">
      <Button type="primary">选择颜色</Button>
    </Popover>
  );
};
export default ColorPicker;
