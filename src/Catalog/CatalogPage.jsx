import React from 'react';
import { Catalog } from './Catalog';
import request from 'superagent';

const accessToken='OCQnKviM0RAnrue62I44iElV2NcINmDsHN-y-8tDqW8'

export class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.drop = this.drop.bind(this);
    this.state={items:[]
    }
  }
  componentDidMount() {
    request
      .get('https://cdn.contentful.com/spaces/1a9so1kp6ial/environments/master/entries')
      .query({'content_type':'product'})
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body:{items} })=> {
        this.setState({items})
      })
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev, item) {
    let j = JSON.stringify(item);
    ev.dataTransfer.setData('text', j);
  }
  drop(ev) {
    ev.preventDefault();
    let item = JSON.parse(ev.dataTransfer.getData('text'));
    this.props.addItem(item);
  }
  render() {
    return (
      <Catalog products={this.state.items} drag={this.drag} allowDrop={this.allowDrop} drop={this.drop} />
    );
  }
}
