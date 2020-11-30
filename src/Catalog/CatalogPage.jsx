import React from 'react';
import { Catalog } from './Catalog';
import { Products } from '/src/constants/Products';

export class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.drop = this.drop.bind(this);
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
      <Catalog products={Products} drag={this.drag} allowDrop={this.allowDrop} drop={this.drop} />
    );
  }
}
