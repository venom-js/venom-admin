/**
 * @name 页脚
 */
import React, { useContext } from 'react';
import { Layout } from 'antd';
import { IndexContext } from '..';
const { Footer } = Layout;

const FooterNode: React.FC = props => {
  const { state: { venomBasicConfig } } = useContext(IndexContext);
  return (
    <Footer className="ft-ct" style={{ background: venomBasicConfig.footerBg }}>
      <p>Copyright@ {new Date().getFullYear()} 陈先生有酒有故事</p>
    </Footer>
  );
};

export default FooterNode;
