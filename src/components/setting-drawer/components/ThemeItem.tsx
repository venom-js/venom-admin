/**
 * @name
 * @author MingShined
 */
import React, { Fragment, useContext } from 'react';
import { Row, Col, Icon } from 'antd';
import { themeOptions } from '../enum';
import Title from 'antd/lib/typography/Title';
import styles from '../index.less';
import { IndexContext } from 'src/layouts';
import { SettingDrawerChildrenProps } from '../type';

const ThemeItem: React.FC<SettingDrawerChildrenProps> = ({ setState, state }) => {
  const {
    state: { venomBasicConfig },
    setState: setIndexState
  } = useContext(IndexContext);
  return (
    <Fragment>
      <Title level={4}>整体风格设置</Title>
      <Row type="flex" gutter={24}>
        {themeOptions.map(item => (
          <Col
            key={item}
            className={styles.pointer}
            onClick={() => {
              setIndexState({
                venomBasicConfig: { ...venomBasicConfig, theme: item }
              });
              setState({ theme: item });
            }}
          >
            <img
              src={require(`../../../assects/images/theme_${item}.svg`)}
              alt=""
            />
            {state.theme === item && (
              <Icon type="check" className={styles.checkIcon} />
            )}
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};
export default ThemeItem;
