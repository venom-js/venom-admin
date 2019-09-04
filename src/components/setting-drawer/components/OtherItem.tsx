/**
 * @name
 * @author MingShined
 */
import React, { Fragment, useContext } from 'react';
import { Row, Col, Switch, Input } from 'antd';
import { RowProps } from 'antd/lib/row';
import { CommonSelect } from 'racc';
import {
  contentLayoutOptions,
  switchOptions,
  inputOptions,
  colorOptions
} from '../enum';
import { SettingDrawerChildrenProps } from '../type';
import { IndexContext } from 'src/layouts';
import Title from 'antd/lib/typography/Title';
import ColorPicker from './ColorPicker';

const rowConfig: RowProps = {
  type: 'flex',
  justify: 'space-between',
  align: 'middle'
};

const OtherItem: React.FC<SettingDrawerChildrenProps> = ({
  setState,
  state
}) => {
  const {
    state: { venomBasicConfig },
    setState: setIndexState
  } = useContext(IndexContext);
  const isHeaderLayout = venomBasicConfig.layout === 'header';
  return (
    <div style={{ marginTop: 24 }}>
      <Title level={4}>其他设置</Title>
      <Row {...rowConfig}>
        <Col>内容区域宽度</Col>
        <Col>
          <CommonSelect
            onChange={(value: any) => {
              setIndexState({
                venomBasicConfig: {
                  ...venomBasicConfig,
                  contentWidthMode: value
                }
              });
              setState({ contentWidthMode: value });
            }}
            value={isHeaderLayout ? venomBasicConfig.contentWidthMode : 'fluid'}
            style={{ width: 90 }}
            dataSource={
              isHeaderLayout ? contentLayoutOptions : [contentLayoutOptions[0]]
            }
          />
        </Col>
      </Row>
      {switchOptions.map(item => (
        <Row key={item.key} style={{ marginTop: 24 }} {...rowConfig}>
          <Col>{item.label}</Col>
          <Col>
            <Switch
              disabled={item.disabled && isHeaderLayout}
              onChange={check => {
                setIndexState({
                  venomBasicConfig: {
                    ...venomBasicConfig,
                    [item.key]: check
                  }
                });
                setState({ [item.key]: check });
              }}
              checked={venomBasicConfig[item.key]}
            />
          </Col>
        </Row>
      ))}
      {inputOptions.map(item => (
        <Row key={item.key} style={{ marginTop: 24 }} {...rowConfig}>
          <Col>{item.label}</Col>
          <Col>
            <Input
              style={{ width: 200 }}
              disabled={item.disabled && isHeaderLayout}
              addonAfter={item.extra && 'px'}
              onChange={({ target: { value } }) => {
                setIndexState({
                  venomBasicConfig: {
                    ...venomBasicConfig,
                    [item.key]: value
                  }
                });
                setState({ [item.key]: value });
              }}
              defaultValue={venomBasicConfig[item.key]}
            />
          </Col>
        </Row>
      ))}
      {colorOptions.map(item => (
        <Row key={item.key} style={{ marginTop: 24 }} {...rowConfig}>
          <Col>{item.label}</Col>
          <Col>
            <ColorPicker
              onChange={(color: any) => {
                setIndexState({
                  venomBasicConfig: {
                    ...venomBasicConfig,
                    [item.key]: color.hex
                  }
                });
                setState({ [item.key]: color.hex });
              }}
              value={venomBasicConfig[item.key]}
            />
          </Col>
        </Row>
      ))}
    </div>
  );
};
export default OtherItem;
