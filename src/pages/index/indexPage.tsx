/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import { Button } from 'antd';
import { CommonSelect } from 'racc';
import { SubPageLayout } from 'src/components/page-layout';
interface Props {}
const HookPage: React.FC<Props> = props => {
  return (
    <div style={{ textAlign: 'center', height: 1000 }}>
      <h1 style={{ fontSize: 60 }}>Hello !</h1>
    </div>
  );
};
export default HookPage;
