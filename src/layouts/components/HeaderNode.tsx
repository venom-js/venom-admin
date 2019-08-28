/**
 * @name Header布局
 */
import React, { Fragment } from 'react';
import { Layout, Icon, Avatar, Button, Popover } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import DvaComponent from 'src/components/basic-component/DvaComponent';
import { AppModelState } from 'src/models/app';
import styles from '../index.less';
import Title from 'antd/lib/typography/Title';
import venomBasicConfig from 'src/venom.config';
import HeaderMenu from './HeaderMenu';
import TitleNode from './TitleNode';
const { Header } = Layout;

interface HeaderNodeProps extends AppModelState {
  collapsed?: boolean;
}

@connect(({ app, user }) => ({
  ...app,
  ...user
}))
export default class HeaderNode extends DvaComponent<HeaderNodeProps> {
  namespace = 'app';
  render() {
    return (
      <Header
        style={{
          height: venomBasicConfig.headerHeight,
          background: venomBasicConfig.theme === 'dark' ? '#001529' : '#fff',
          color: venomBasicConfig.theme === 'dark' ? '#fff' : '#1890ff',
          position: venomBasicConfig.fixHeader ? 'fixed' : 'static'
        }}
        className={`${styles.header}`}
      >
        {venomBasicConfig.layout === 'header' &&
        venomBasicConfig.contentWidth === 'fixed' ? (
          <div className={styles.wrap}>
            <HeaderChildren />
          </div>
        ) : (
          <HeaderChildren />
        )}
      </Header>
    );
  }
}

const HeaderChildren: React.FC = props => (
  <Fragment>
    {venomBasicConfig.layout === 'header' || venomBasicConfig.fixHeader ? (
      <TitleNode />
    ) : (
      <div />
    )}
    {venomBasicConfig.layout === 'header' && <HeaderMenu />}
    <div className={styles.headerExtra}>Header</div>
  </Fragment>
);
