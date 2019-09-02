/**
 * @name 菜单栏
 */
import React, { useContext, useState } from 'react';
import { Menu, Layout } from 'antd';
import styles from '../index.less';
import TitleNode from './TitleNode';
import renderMenuNode from './MenuNode';
import { IndexContext } from '..';
import { connect } from 'dva';
import { AppModelState } from 'src/models/app';

const { Sider } = Layout;

const SiderMenu: React.FC<AppModelState> = props => {
  const {
    state: { venomBasicConfig }
  } = useContext(IndexContext);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const { breadCrumbs, collapsed } = props;
  const keys = breadCrumbs.map(item => item.path);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme={venomBasicConfig.theme}
      width={venomBasicConfig.siderWidth}
      className={`${styles.sider}`}
      style={{
        paddingTop: venomBasicConfig.fixHeader && +venomBasicConfig.headerHeight
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
          setOpenKeys(values);
        }}
      >
        {renderMenuNode()}
      </Menu>
    </Sider>
  );
};

export default connect(({ app }) => ({ ...app }))(SiderMenu);
