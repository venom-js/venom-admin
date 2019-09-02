/**
 * @name
 * @author MingShined
 */
import React, { useContext } from 'react';
import { Row, Col, Icon } from 'antd';
import { layoutOptions } from '../enum';
import Title from 'antd/lib/typography/Title';
import styles from '../index.less';
import { IndexContext } from 'src/layouts';
import { SettingDrawerChildrenProps } from '../type';

const LayoutItem: React.FC<SettingDrawerChildrenProps> = ({ setState, state }) => {
  const {
    state: { venomBasicConfig },
    setState: setIndexState
  } = useContext(IndexContext);
  return (
    <div style={{ marginTop: 24 }}>
      <Title level={4}>导航风格设置</Title>
      <Row type="flex" gutter={24}>
        {layoutOptions.map(item => (
          <Col
            key={item}
            className={styles.pointer}
            onClick={() => {
              setIndexState({
                venomBasicConfig: { ...venomBasicConfig, layout: item }
              });
              setState({ layout: item });
            }}
          >
            <img
              src={require(`../../../assects/images/layout_${item}.svg`)}
              alt=""
            />
            {state.layout === item && (
              <Icon type="check" className={styles.checkIcon} />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default LayoutItem;
