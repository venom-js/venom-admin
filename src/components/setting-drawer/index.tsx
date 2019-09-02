/**
 * @name
 * @author MingShined
 */
import React, { useContext } from 'react';
import { CommonDrawer, useStateReducer } from 'racc';
import layoutstyles from '../../layouts/index.less';
import { Icon, Button, message } from 'antd';
import ThemeItem from './components/ThemeItem';
import { VenomBasicConfig } from 'src/types/venom';
import LayoutItem from './components/LayoutItem';
import OtherItem from './components/OtherItem';
import { IndexContext } from 'src/layouts';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const getSettingDrawerState = () =>
  ({
    theme: 'dark',
    layout: 'sider'
  } as Partial<VenomBasicConfig>);

export type SettingDrawerState = ReturnType<typeof getSettingDrawerState>;

interface Props {}
const SettingDrawer: React.FC<Props> = props => {
  const {
    state: { venomBasicConfig }
  } = useContext(IndexContext);
  const [state, setState] = useStateReducer(getSettingDrawerState());
  const handleCopy = () => {
    console.log(venomBasicConfig);
  };
  return (
    <CommonDrawer
      btnProps={{ className: `${layoutstyles.affixIcon}` }}
      drawerProps={{ width: 350, destroyOnClose: false }}
      btnText={<Icon type="setting" />}
      footer={false}
    >
      <ThemeItem state={state} setState={setState} />
      <LayoutItem state={state} setState={setState} />
      <OtherItem state={state} setState={setState} />
      <CopyToClipboard
        onCopy={() => message.success('拷贝成功')}
        text={JSON.stringify(venomBasicConfig)}
      >
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Button>拷贝配置</Button>
        </div>
      </CopyToClipboard>
    </CommonDrawer>
  );
};
export default SettingDrawer;
