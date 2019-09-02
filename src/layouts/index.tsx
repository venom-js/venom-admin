/**
 * @name 主入口
 */
import React, { Fragment } from 'react';
import HeaderLayout from 'src/layouts/HeaderLayout';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import LoginPage from 'src/pages/user/loginPage';
import withRouter from 'umi/withRouter';
import DocumentTitle from 'react-document-title';
import SiderLayout from './SiderLayout';
import { Basic } from 'src/types';
import { VenomBasicConfig } from 'src/types/venom';
import { useStateReducer } from 'racc';
import BasicLayout from './BasicLayout';
moment.locale('zh-cn');

interface ContextProps<T> {
  state: T;
  setState: (state: Partial<T>) => void;
}

export function useCreateContext<T>() {
  const Context = React.createContext<ContextProps<T>>(null);
  return Context;
}

const getIndexContextState = () => ({
  venomBasicConfig: {
    title: 'venom admin',
    headerHeight: 64,
    siderWidth: 256,
    contentBg: '#eee',
    footerBg: '#fff',
    theme: 'dark',
    layout: 'sider',
    siderMultiple: true,
    fixHeader: true,
    fixSider: true,
    headerBg: '',
    contentWidthMode: 'fluid'
  } as Partial<VenomBasicConfig>
});
type IndexContextState = ReturnType<typeof getIndexContextState>;

export const IndexContext = useCreateContext<IndexContextState>();

const IndexLayout: React.FC<Basic.BaseProps> = props => {
  const [state, setState] = useStateReducer(getIndexContextState());
  const { children, location } = props;
  let layout = null;
  if (location.pathname === '/login') {
    layout = <LoginPage />;
  } else {
    layout = <BasicLayout children={children} location={location} />;
  }
  return (
    <IndexContext.Provider value={{ setState, state }}>
      <DocumentTitle title={state.venomBasicConfig.title}>
        <ConfigProvider locale={zh_CN}>{layout}</ConfigProvider>
      </DocumentTitle>
    </IndexContext.Provider>
  );
};

export default withRouter(IndexLayout);
