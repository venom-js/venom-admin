/**
 * @name 基础布局Layout
 * @author MingShined
 */
import React, { useEffect, useRef } from 'react';
import { Basic } from 'src/types';
import { Layout, ConfigProvider } from 'antd';
import HeaderNode from './components/HeaderNode';
import ContentNode from './components/ContentNode';
import FooterNode from './components/FooterNode';
import venomBasicConfig from 'src/venom.config';
import SiderMenu from './components/SiderMenu';
declare var window: any;

interface SiderLayoutProps extends Basic.BaseProps {}

const SiderLayout: React.FC<SiderLayoutProps> = props => {
  const pathname: string | any = props.location.pathname;
  const popupDom = useRef(null);
  useEffect(() => {
    handleDispatch({
      type: 'app/filterBreadCrumbs',
      payload: pathname
    });
  }, [pathname]);
  const handleDispatch = payload => {
    window.g_app._store.dispatch(payload);
  };
  const { children } = props;
  return (
    <Layout className={venomBasicConfig.fixSider ? 'flex flex-1 h-100p' : 'mh-100p'}>
      <SiderMenu />
      <Layout className="flex h-100p">
        <HeaderNode />
        <ConfigProvider getPopupContainer={() => popupDom.current}>
          <div ref={popupDom}>
            <ContentNode children={children} />
          </div>
        </ConfigProvider>
        <FooterNode />
      </Layout>
    </Layout>
  );
};

export default SiderLayout;
