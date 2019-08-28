/**
 * @name 主体main
 */
import React from 'react';
import { Layout } from 'antd';
import venomBasicConfig from 'src/venom.config';
import styles from '../index.less';
const { Content } = Layout;

const ContentNode: React.FC = props => {
  return (
    <div
      style={{
        paddingTop: venomBasicConfig.fixHeader ? venomBasicConfig.headerHeight : '0'
      }}
      className="flex flex-1 of-x-hd of-y-at"
    >
      <Content
        className={
          venomBasicConfig.layout === 'header' &&
          venomBasicConfig.contentWidth === 'fixed'
            ? styles.wrap
            : 'flex'
        }
        style={{ flexDirection: 'column', background: venomBasicConfig.contentBg }}
      >
        {props.children}
      </Content>
    </div>
  );
};

export default ContentNode;
