/**
 * @name 菜单栏
 */
import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import Link from 'umi/link';
import menuList from 'src/common/menu';
import { MenuType, MenuBean } from 'src/common/menu/type';
import { connect } from 'dva';
import { AppModelState } from 'src/models/app';
import DvaComponent from 'src/components/basic-component/DvaComponent';
import styles from '../index.less';
import venomBasicConfig from 'src/venom.config';
import Title from 'antd/lib/typography/Title';
import TitleNode from './TitleNode';
import renderMenuNode from './MenuNode';

const { Sider } = Layout;

interface Props extends AppModelState {
  userAuthority?: any;
}

@connect(({ app, user }) => ({
  breadCrumbs: app.breadCrumbs,
  collapsed: app.collapsed,
  ...user
}))
export default class SiderMenu extends DvaComponent<Props> {
  namespace = '';
  state = {
    openKeys: []
  };

  handleResetModel = (menuItem: MenuBean) => {
    if (!menuItem.model) {
      return;
    }
    this.props.dispatch({
      type: `${menuItem.model}/resetState`
    });
  };
  render() {
    const { breadCrumbs, collapsed } = this.props;
    const keys = breadCrumbs.map(item => item.path);
    const openKeys = this.state.openKeys;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={venomBasicConfig.theme}
        width={venomBasicConfig.siderWidth}
        className={`${styles.sider}`}
        style={{
          paddingTop: venomBasicConfig.fixHeader && venomBasicConfig.headerHeight
        }}
      >
        {!venomBasicConfig.fixHeader && <TitleNode />}
        <Menu
          theme={venomBasicConfig.theme}
          mode="inline"
          className={`flex-1 of-x-hd`}
          selectedKeys={keys}
          openKeys={
            openKeys.length
              ? venomBasicConfig.siderMultiple
                ? openKeys
                : [[...openKeys].pop()]
              : keys
          }
          defaultOpenKeys={keys}
          onOpenChange={values => {
            this.setState({
              openKeys: values
            });
          }}
        >
          {renderMenuNode()}
        </Menu>
      </Sider>
    );
  }
}
