/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { Popover, Button } from 'antd';
import { SketchPicker } from 'react-color';
import styles from '../index.less';

interface Props {
  onChange?: (color: string) => void;
  value?: any;
  disabled: boolean;
}
const ColorPicker: React.FC<Props> = props => {
  const content: React.ReactNode = (
    <SketchPicker
      color={props.value}
      onChange={props.onChange}
      on
      width={250}
    />
  );
  if (props.disabled) {
    return (
      <Button
        style={{ background: props.value || '#1890ff' }}
        className={styles.colorBtn}
        disabled={props.disabled}
      />
    );
  }
  return (
    <Popover content={content} title="">
      <Button
        style={{ background: props.value || '#1890ff' }}
        className={styles.colorBtn}
      />
    </Popover>
  );
};
export default ColorPicker;
