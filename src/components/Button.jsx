import React from 'react';
import { Button, Flex, WingBlank } from 'antd-mobile';

/* eslint global-require: 0 */
export default class ButtonExample extends React.Component {
  render() {
    return (<WingBlank>
    <div className="btn-container">
      <div>
        <Button className="btn" type="primary">primary button</Button>
        <Button className="btn" disabled onClick={e => console.log(e)}>
          disabled button
        </Button>
        <Button className="btn" loading>loading button</Button>
        <Button className="btn" icon="check-circle-o">with icon</Button>

        <div style={{ height: '0.16rem' }} />
        {/* <Button className="btn" activeStyle={false}>无点击反馈</Button> */}
        {/* <Button className="btn" activeStyle={{ backgroundColor: 'red' }}>自定义点击反馈 style</Button> */}

        <p style={{ margin: '30px 0 18px 0', color: '#999' }}>inline / small</p>
        <Flex style={{ marginBottom: '0.16rem' }}>
          <Button type="primary" inline style={{ marginRight: '0.08rem' }}>inline</Button>
          <Button type="ghost" inline size="small" style={{ marginRight: '0.08rem' }}>inline small</Button>
          <Button type="primary" inline size="small">inline small</Button>
        </Flex>
      </div>
    </div>
  </WingBlank>);
  }
}

