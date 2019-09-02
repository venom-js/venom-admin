/**
 * @name 基础布局Layout
 * @author MingShined
 */
import React, { useEffect, useRef, useContext } from 'react';
import { Basic } from 'src/types';
import { Layout, ConfigProvider, message, notification } from 'antd';
import HeaderNode from './components/HeaderNode';
import ContentNode from './components/ContentNode';
import FooterNode from './components/FooterNode';
import { IndexContext } from '.';
import SiderMenu from './components/SiderMenu';
declare var window: any;

interface BasicLayoutProps extends Basic.BaseProps {}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const {
    state: { venomBasicConfig }
  } = useContext(IndexContext);
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
  message.config({
    getContainer: () => popupDom.current
  });
  notification.config({
    getContainer: () => popupDom.current
  });
  const { children } = props;
  const isHeaderLayout = venomBasicConfig.layout === 'header';
  return (
    <Layout
      className={
        isHeaderLayout || venomBasicConfig.fixSider
          ? 'flex flex-1 h-100p'
          : 'mh-100p'
      }
    >
      {isHeaderLayout ? <HeaderNode /> : <SiderMenu />}
      <Layout className="flex">
        {!isHeaderLayout && <HeaderNode />}
        <ConfigProvider getPopupContainer={() => popupDom.current}>
          <div ref={popupDom} className="h-100p">
            <ContentNode children={children} />
            <FooterNode />
          </div>
        </ConfigProvider>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
