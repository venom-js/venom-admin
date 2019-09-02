/**
 * @name 主体main
 */
import React, { useContext } from 'react';
import { Layout, Affix } from 'antd';
import styles from '../index.less';
import SettingDrawer from 'src/components/setting-drawer';
import { IndexContext } from '..';
const { Content } = Layout;

const ContentNode: React.FC = props => {
  const {
    state: { venomBasicConfig }
  } = useContext(IndexContext);
  return (
    <div
      style={{
        paddingTop: venomBasicConfig.fixHeader
          ? +venomBasicConfig.headerHeight
          : '0',
        background: venomBasicConfig.contentBg
      }}
      className="flex flex-1 of-x-hd of-y-at"
    >
      <Content
        className={
          venomBasicConfig.layout === 'header' &&
          venomBasicConfig.contentWidthMode === 'fixed'
            ? styles.wrap
            : 'flex'
        }
        style={{
          flexDirection: 'column'
        }}
      >
        <Affix offsetTop={400} className={styles.affix}>
          <SettingDrawer />
        </Affix>
        {props.children}
      </Content>
    </div>
  );
};

export default ContentNode;
