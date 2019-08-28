/**
 * @name 主入口
 */
import React from 'react';
import HeaderLayout from 'src/layouts/HeaderLayout';
import { LocaleProvider, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import LoginPage from 'src/pages/user/loginPage';
import BasciComponent from 'src/components/basic-component';
import withRouter from 'umi/withRouter';
import DocumentTitle from 'react-document-title';
import venomBasicConfig from 'src/venom.config';
import SiderLayout from './SiderLayout';
moment.locale('zh-cn');

class IndexLayout extends BasciComponent {
  render() {
    const { children, location } = this.props;
    let layout = null;
    if (!localStorage.getItem('dms-token')) {
      layout = <LoginPage />;
    } else if (location.pathname === '/login') {
      layout = <LoginPage />;
    } else {
      layout = venomBasicConfig.layout === 'header' ? (
        <HeaderLayout location={location} children={children} />
      ) : (
        <SiderLayout location={location} children={children} />
      );
    }
    return (
      <DocumentTitle title={venomBasicConfig.title}>
        <LocaleProvider locale={zh_CN}>{layout}</LocaleProvider>
      </DocumentTitle>
    );
  }
}

export default withRouter(IndexLayout);
