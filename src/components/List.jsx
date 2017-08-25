import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class ListExample extends React.Component {
  state = {
    disabled: false,
  }
  handleLongPress = (e) => {
    console.log('longpress toggled', e);
  }
  render() {
    return (<div>
      <List renderHeader={() => 'Basic Style'} className="my-list">
        <Item extra={'extra content'} onLongPress={this.handleLongPress}>Title</Item>
      </List>
      <List renderHeader={() => 'Subtitle'} className="my-list">
        <Item arrow="horizontal" multipleLine>
          Title <Brief>subtitle</Brief>
        </Item>
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {}}
          platform="android"
        >
          ListItem （Android）<Brief>There may have water ripple effect of <br /> material if you set the click event.</Brief>
        </Item>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </List>
    </div>);
  }
}

